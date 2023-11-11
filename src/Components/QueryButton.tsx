import { Button } from "@mantine/core";
import { getDepartmentCourses } from "@/firebase/client";
import { useState } from "react";
export function QueryButton({ department }: { department: string }) {
  const [courseData, setCourseData] = useState<Course[]>([]);
  const fetchCourses = async () => {
    const source = `/api`;
    try {
      const response = await fetch(source);

      if (response.ok) {
        const courseList: Course[] = await response.json();
        //console.log(courseList);

        setCourseData(courseList);
        console.log("success");
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const fetchCoursesFromFirebase = async () => {
    const newCourses: any = await getDepartmentCourses(department);
    setCourseData(newCourses);
    console.log("successfully fetched courses from firebase");
  };
  return (
    <>
      <Button onClick={() => console.log(courseData)}>Log</Button>
      <Button onClick={fetchCoursesFromFirebase}>Get</Button>
    </>
  );
}
