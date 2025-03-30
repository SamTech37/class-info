//a component for testing
//fetches courses from the api and logs them to the console
"use client";
import { Button } from "@mantine/core";
import { useState } from "react";

export function QueryTestButton({ department }: { department: string }) {
  const [courseData, setCourseData] = useState<Course[]>([]);

  const fetchCoursesFromApi = async () => {
    const response = await fetch(`/api/11210?department=${department}`);
    const courseList = await response.json();
    setCourseData(courseList);
    console.log("successfully fetched courses from api");
  };

  return (
    <>
      <Button onClick={() => console.log(courseData)}>Log</Button>
      <Button onClick={fetchCoursesFromApi}>Get</Button>
    </>
  );
}
