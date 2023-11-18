//API to get course by courseID

import { NextRequest, NextResponse } from "next/server";
import { db } from "../route";

export async function GET(
  request: NextRequest,
  context: { params: { courseID: string } }
) {
  const courseID = context.params.courseID.replace(/\s/g, "").toUpperCase();
  const course = db.data.find(
    (course) => course.courseID.replace(/\s/g, "") === courseID
  );
  if (!course) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 });
  }
  return NextResponse.json(course);
}
