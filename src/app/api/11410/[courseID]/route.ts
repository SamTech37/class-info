//API to get 11410 course by courseID

import courseList11410 from "../11410Courses.json";
import { createCourseIdApiBySemester } from "../../createCourseApi";

export const GET = createCourseIdApiBySemester(courseList11410);
