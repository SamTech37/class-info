// API of course list of semester 11320
// basic query such as department, instructor, course name, class time, etc.

import courseList11320 from "./11320Courses.json";

import { createCourseListApiBySemester } from "../createCourseApi";

export const GET = createCourseListApiBySemester(courseList11320);
