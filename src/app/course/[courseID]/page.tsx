//a server component that will fetch with the courseID
//and list out all the detailed info of the course
//the courseID page

import { notFound } from "next/navigation";
import { CourseView } from "@/Components/CourseView";
import { resourceURL } from "@/config";

async function getCourseData(courseID: string) {
  //remove all whitespace
  const queryCourseID = courseID.replace(/\s|(%20)/g, "");
  const semester = queryCourseID.slice(0, 5);
  const res = await fetch(`${resourceURL}/api/${semester}/${queryCourseID}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
    //will redirect to 404 page
  }
  return res.json();
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ courseID: string }>;
  //params is a promise, need to await it
}) {
  //get courseID from params
  const paramsObj = await params;
  const data: Course = await getCourseData(paramsObj.courseID);

  return <CourseView courseData={data} />;
}
