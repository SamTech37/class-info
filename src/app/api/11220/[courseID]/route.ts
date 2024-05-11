//API to get 11220 course by courseID

import courseList11220 from "../11220Courses.json";
import { createCourseIdApiBySemester } from "../../createCourseApi";

export const GET = createCourseIdApiBySemester(courseList11220);
