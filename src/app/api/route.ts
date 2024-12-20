import { fetchAllCoursesFromNTHU } from "@/utility";
import { NextRequest, NextResponse } from "next/server";

// [WORKFLOW]
// get the latest course list from NTHU
// sanatize the data, in JSON formatx`x`
// and create new api endpoint every semester

// [TODO] automate this process weekly, monthly, or every semester

export async function GET(request: NextRequest) {
  // the actual GET request handler
  const courseList = await fetchAllCoursesFromNTHU();

  return NextResponse.json(courseList);
}
