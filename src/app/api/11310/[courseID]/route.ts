//API to get 11310 course by courseID

import courseList11310 from "../11310Courses.json";
import { createCourseIdApiBySemester } from "../../createCourseApi";

export const GET = createCourseIdApiBySemester(courseList11310);
