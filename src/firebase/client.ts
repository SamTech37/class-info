import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
} from "firebase/firestore/lite";
const firebaseConfig = {
  //firebase config from process.env
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
//Courses_11210 or Courses_11320
const coursesCollection = collection(db, "Courses_11210");
export const testGet = async () => {
  try {
    const querySnapshot = await getDocs(coursesCollection);
    const data = querySnapshot.docs.map((doc) => doc.data());
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const dumpCourses = async (courseList: Course[]) => {
  courseList.forEach(async (course) => {
    const docRef = doc(coursesCollection, course.courseID);
    await setDoc(docRef, course);
  });
};

export const getDepartmentCourses = async (department: string) => {
  const q = query(coursesCollection, where("department", "==", department));
  const querySnapshot = await getDocs(q);
  const courses = querySnapshot.docs.map((doc) => doc.data());
  return courses;
};
