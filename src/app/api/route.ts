import { NextRequest, NextResponse } from "next/server";

import { JSONSyncPreset } from "lowdb/node";
import courseList11210 from "./11210Courses.json";

const defaultData: Course[] = courseList11210 as Course[];
const db = JSONSyncPreset<Course[]>("db.json", defaultData);

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const department = searchParams.get("department");
  console.log(department);

  const courseList = db.data.filter((course) => {
    return course.department === department;
  });

  return NextResponse.json(courseList);
}
