//API to get 11210 course by courseID

import courseList11210 from "../11210Courses.json";
import { createCourseIdApiBySemester } from "../../createCourseApi";

export const GET = createCourseIdApiBySemester(courseList11210);
