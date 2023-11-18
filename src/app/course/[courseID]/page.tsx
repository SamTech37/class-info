//a server component that will fetch with the courseID
//and list out all the detailed info of the course
import { Stack } from "@mantine/core";
import { notFound } from "next/navigation";

const siteURL =
  process.env.NODE_ENV === "production"
    ? "http://nthuccc.vercel.app"
    : "http://localhost:3000";

async function getCourseData(courseID: string) {
  //remove all whitespace
  const queryCourseID = courseID.replace(/\s|(%20)/g, "");
  //console.error("💀💀💀courseID", queryCourseID);
  const res = await fetch(`${siteURL}/api/11210/${queryCourseID}`, {
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
  return (
    <Stack>
      <p>Course Name: {data.nameZH}</p>
    </Stack>
  );
}
