// API of course list of semester 11410
// basic query such as department, instructor, course name, class time, etc.

import courseList11410 from "./11410Courses.json";

import { createCourseListApiBySemester } from "../createCourseApi";

export const GET = createCourseListApiBySemester(courseList11410);
