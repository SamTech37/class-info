// src/app/api/createCourseApi.ts
import { NextRequest, NextResponse } from "next/server";
import { JSONSyncPreset } from "lowdb/node";
import { isFiltersMatched } from "@/utility";

type QueryFilters = {
  department?: string | null;
  instructor?: string | null;
  courseName?: string | null;
  classTime?: string | null;
  languageOfInstruction?: string | null;
};

// a generic function to create course API according to
// course data of different semesters
export function createCourseListApiBySemester(courseListJson: any[]) {
  const defaultData: Course[] = courseListJson as Course[];
  const db = JSONSyncPreset<Course[]>("db.json", defaultData);

  return async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const filters: QueryFilters = {
      department: searchParams.get("department")?.toUpperCase(),
      instructor: searchParams.get("instructor")?.toUpperCase(),
      courseName: searchParams.get("courseName"),
      classTime: searchParams.get("classTime"),
      languageOfInstruction: searchParams.get("lang")?.toUpperCase(),
    };
    console.error("filters of query", filters);

    const courseList = db.data.filter((course) =>
      isFiltersMatched(course, filters)
    );

    return NextResponse.json(courseList);
  };
}

export function createCourseIdApiBySemester(courseListJson: any[]) {
  const defaultData: Course[] = courseListJson as Course[];
  const db = JSONSyncPreset<Course[]>("db.json", defaultData);

  return async function GET(
    request: NextRequest,
    context: { params: { courseID: string } }
  ) {
    const courseID = context.params.courseID.replace(/\s/g, "").toUpperCase();
    const course = db.data.find(
      (course) => course.courseID.replace(/\s/g, "") === courseID
    );
    if (!course) {
      //return 404 if course not found
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(course);
  };
}
