// API of course list of 11210
// basic query such as department, instructor, course name, class time, etc.

import { NextRequest, NextResponse } from "next/server";

import { JSONSyncPreset } from "lowdb/node";
import courseList11210 from "./11210Courses.json";

const defaultData: Course[] = courseList11210 as Course[];
export const db = JSONSyncPreset<Course[]>("db.json", defaultData);

type QueryFilters = {
  department?: string | null;
  instructor?: string | null;
  courseName?: string | null;
  classTime?: string | null;
  languageOfInstruction?: string | null;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filters: QueryFilters = {
    department: searchParams.get("department")?.toUpperCase(),
    instructor: searchParams.get("instructor")?.toUpperCase(),
    courseName: searchParams.get("courseName"),
    classTime: searchParams.get("classTime"),
    languageOfInstruction: searchParams.get("lang")?.toUpperCase(),
  };
  console.error("filters of query", filters);

  const courseList = db.data.filter((course) => {
    if (filters.department && course.department !== filters.department)
      return false;
    if (
      //match instructors' names with the query keyword
      filters.instructor &&
      !course.instructorNamesEN.some((instructor) =>
        instructor.includes(filters.instructor as string)
      ) &&
      !course.instructorNamesZH.some((instructor) =>
        instructor.includes(filters.instructor as string)
      )
    )
      return false;
    if (
      filters.courseName &&
      course.nameEN.toLowerCase().indexOf(filters.courseName.toLowerCase()) ===
        -1 &&
      course.nameZH.toLowerCase().indexOf(filters.courseName.toLowerCase()) ===
        -1
    )
      return false;

    //TODO: match class time with the query keyword
    //TODO: match language of instruction with the query language
    //if everything mathes, return true
    return true;
  });

  return NextResponse.json(courseList);
}
