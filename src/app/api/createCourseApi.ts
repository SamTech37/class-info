// src/app/api/createCourseApi.ts
import { NextRequest, NextResponse } from "next/server";
import { JSONSyncPreset } from "lowdb/node";
import { isFiltersMatched } from "@/utility";

// a generic function to create course API according to
// course data of different semesters

// data of different semesters:
// https://curricul.site.nthu.edu.tw/p/406-1208-111356,r7883.php?Lang=zh-tw
// data of latest semester:
// https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/JH/OPENDATA/open_course_data.json

export function createCourseListApiBySemester(courseListJson: any[]) {
  const defaultData: Course[] = courseListJson as Course[];
  const db = JSONSyncPreset<Course[]>("db.json", defaultData);

  return async function GET(request: NextRequest) {
    // the actual GET request handler
    const searchParams = request.nextUrl.searchParams;
    const filters: QueryFilters = {
      department: searchParams.get("department")?.toUpperCase(),
      instructor: searchParams.get("instructor")?.toUpperCase(),
      courseName: searchParams.get("courseName"),
      classTime: searchParams.get("classTime"),
      lang: searchParams.get("lang")?.toUpperCase() as "EN" | "ZH" | undefined,
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

  // the actual GET request handler
  return async function GET(
    request: NextRequest,
    //deconstructuring context of type NextApiContext
    segmentData: {
      params: Promise<{ courseID: string }>;
    }
  ) {
    const params = await segmentData.params;
    //trim whitespaces and convert to uppercase
    const courseID = params.courseID.replace(/\s/g, "").toUpperCase();
    //find the course matching query
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
