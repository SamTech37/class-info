// API of course list of semester 11210
// basic query such as department, instructor, course name, class time, etc.

import courseList11210 from "./11210Courses.json";
import { createCourseListApiBySemester } from "../createCourseApi";

export const GET = createCourseListApiBySemester(courseList11210);
