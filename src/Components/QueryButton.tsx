import { Button } from "@mantine/core";
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
  const fetchCoursesFromLowdb = async () => {
    console.log("successfully fetched courses from db", courseData);
  };

  return (
    <>
      <Button onClick={() => console.log(courseData)}>Log</Button>
      <Button onClick={fetchCoursesFromLowdb}>Get</Button>
    </>
  );
}
