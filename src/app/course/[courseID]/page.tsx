//a server component that will fetch with the courseID
//and list out all the detailed info of the course
//the courseID page

import { notFound } from "next/navigation";
import { CourseView } from "@/Components/CourseView";
import { SITE } from "@/config";

const siteURL =
  process.env.NODE_ENV === "production"
    ? SITE.websiteURL
    : "http://localhost:3000";

async function getCourseData(courseID: string) {
  //remove all whitespace
  const queryCourseID = courseID.replace(/\s|(%20)/g, "");
  const semester = queryCourseID.slice(0, 5);
  const res = await fetch(`${siteURL}/api/${semester}/${queryCourseID}`, {
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
  params: { courseID: string };
}) {
  const data: Course = await getCourseData(params.courseID);

  return <CourseView courseData={data} />;
}
