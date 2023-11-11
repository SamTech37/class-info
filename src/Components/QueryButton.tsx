import { Button } from "@mantine/core";
import { dumpCourses, getDepartmentCourses } from "@/firebase/client";
import { useState } from "react";
export function QueryButton() {
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
  const postCourses = async (courses: Course[]) => {
    await dumpCourses(courses);
    console.log(courses, "done");
  };

  return (
    <>
      <Button onClick={async () => await fetchCourses()}>Query</Button>
      <Button onClick={() => console.log(courseData.slice(200, 210))}>
        Log
      </Button>
      <Button onClick={async () => await getDepartmentCourses("CHEM")}>
        Get
      </Button>
      <Button
        onClick={async () => await postCourses(courseData.slice(200, 210))}
      >
        Write
      </Button>
    </>
  );
}
