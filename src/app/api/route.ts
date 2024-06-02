import { fetchAllCoursesFromNTHU } from "@/utility";
import { NextRequest, NextResponse } from "next/server";

//get the latest course list from NTHU
//sanatize the data
//and create new api endpoint every semester
export async function GET(request: NextRequest) {
  // the actual GET request handler
  const courseList = await fetchAllCoursesFromNTHU();

  return NextResponse.json(courseList);
}
