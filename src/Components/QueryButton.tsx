import { Button } from "@mantine/core";
import { useState } from "react";

export function QueryButton({ department }: { department: string }) {
  const [courseData, setCourseData] = useState<Course[]>([]);

  const fetchCoursesFromApi = async () => {
    const response = await fetch(`/api/?department=${department}`);
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
