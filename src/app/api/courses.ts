// pages/api/courses.ts
import { NextApiRequest, NextApiResponse } from "next";
import { JSONSyncPreset } from "lowdb/node";
import courseList11210 from "./11210Courses.json";

const defaultData: Course[] = courseList11210 as Course[];
const db = JSONSyncPreset<Course[]>("db.json", defaultData);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const department = req.query.department;
  const courseList = db.data.filter(
    (course) => course.department === department
  );
  res.status(200).json(courseList);
}
