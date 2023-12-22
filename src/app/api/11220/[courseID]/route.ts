//API to get course by courseID

import { NextRequest, NextResponse } from "next/server";
import { db11220 } from "../route";

export async function GET(
  request: NextRequest,
  context: { params: { courseID: string } }
) {
  const courseID = context.params.courseID.replace(/\s/g, "").toUpperCase();
  const course = db11220.data.find(
    (course) => course.courseID.replace(/\s/g, "") === courseID
  );
  if (!course) {
    //return 404 if course not found
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }
  return NextResponse.json(course);
}
