//API to get 11320 course by courseID

import courseList11320 from "../11320Courses.json";
import { createCourseIdApiBySemester } from "../../createCourseApi";

export const GET = createCourseIdApiBySemester(courseList11320);
