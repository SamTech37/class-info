// API of course list of semester 11220
// basic query such as department, instructor, course name, class time, etc.

import courseList11220 from "./11220Courses.json";

import { createCourseListApiBySemester } from "../createCourseApi";

export const GET = createCourseListApiBySemester(courseList11220);
