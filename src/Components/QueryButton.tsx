import { Button } from "@mantine/core";
import { useState } from "react";
export function QueryButton({ department }: { department: string }) {
  const [courseData, setCourseData] = useState<Course[]>([]);

  const fetchCoursesFromLowdb = async () => {
    //const courseList = await getCoursesByDepartment(department);
    //setCourseData(courseList);
    console.log("successfully fetched courses from db", courseData);
  };

  return (
    <>
      <Button onClick={() => console.log(courseData)}>Log</Button>
      <Button onClick={fetchCoursesFromLowdb}>Get</Button>
    </>
  );
}
