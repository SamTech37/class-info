import fs from "fs/promises";

function getDepartment(courseID: string): string {
  return courseID.replace(/[\d\s]/g, "");
}

// turns CourseRaw[] from source into Course[] used in the app and API
export function mapCourseList(courseListRaw: CourseRaw[]): Course[] {
  return courseListRaw.map((item) => ({
    courseID: item.科號,
    department: getDepartment(item.科號),
    nameZH: item.課程中文名稱,
    nameEN: item.課程英文名稱,
    credits: Number(item.學分數),
    enrollmentLimit: item.人限 === "" ? 0 : Number(item.人限),
    freshmanReservedSeats: Number(item.新生保留人數),
    GEObject: item.通識對象,
    GECategory: item.通識類別,
    languageOfLecture: item.授課語言 === "中" ? "Chinese" : "English",
    suspensionStatus: item.停開註記,

    classroom: item.教室與上課時間
      .split("\n")
      .slice(0, -1)
      .map((line) => line.split("\t")[0]),
    classTime: item.教室與上課時間
      .split("\n")
      .slice(0, -1)
      .map((line) => line.split("\t")[1]),
    instructorNamesZH: item.授課教師
      .split("\n")
      .slice(0, -1)
      .map((line) => line.split("\t")[0]),
    instructorNamesEN: item.授課教師
      .split("\n")
      .slice(0, -1)
      .map((line) => line.split("\t")[1]),

    remarks: item.備註,
    prerequisites: item.擋修說明,
    courseRestrictions: item.課程限制說明,
    expertises: item.第一二專長對應.split("\t"),
    creditPrograms: item.學分學程對應.split("/"),
    noExtraEnrollmentDescription: item.不可加簽說明,
    requiredOrOptionalFor: item.必選修說明.split("\t").slice(0, -1),
  }));
}

export const fetchAllCoursesFromNTHU = async (): Promise<Course[]> => {
  const url =
    "https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/JH/OPENDATA/open_course_data.json";
  const res = await fetch(url);
  const courseListRaw: CourseRaw[] = await res.json();
  return mapCourseList(courseListRaw);
};

// execute this from terminal or console only
export const loadCoursesFromLocalFile = async (
  filePath: string
): Promise<Course[]> => {
  const rawText = await fs.readFile(filePath, "utf-8");
  const courseListRaw: CourseRaw[] = JSON.parse(rawText);
  return mapCourseList(courseListRaw);
};

function matchesQueryString(text: string, query: string): boolean {
  return (
    text.trim().toLowerCase().includes(query.trim().toLowerCase()) ||
    text
      .replace(/\s+/g, "") //whitespaces in between words might be an issue
      .toLowerCase()
      .includes(query.replace(/\s+/g, "").toLowerCase())
  );
}

export function isFiltersMatched(
  course: Course,
  filters: QueryFilters
): boolean {
  /*
   * All string matching should be case-insensitive
   * All string matching should be trimmed
   */

  //straight return if filters is empty
  if (
    !filters.courseName &&
    !filters.instructor &&
    !filters.department &&
    !filters.semester &&
    !filters.classTime &&
    !filters.venue &&
    !filters.lang
  ) {
    return true;
  }

  //match department
  if (filters.department) {
    const departmentIncluded =
      course.department.toLowerCase() == filters.department.toLowerCase();
    //strict match, not includes()
    //because department is a code, not a string
    // e.g. "EC" and "ECON" should not be matched
    if (!departmentIncluded) {
      return false;
    }
  }

  //match instructors' names with the query keyword
  if (filters.instructor) {
    const instructorIncluded =
      course.instructorNamesEN.some((instructor) =>
        matchesQueryString(instructor, filters.instructor as string)
      ) ||
      course.instructorNamesZH.some((instructor) =>
        matchesQueryString(instructor, filters.instructor as string)
      );

    if (!instructorIncluded) {
      return false;
    }
  }

  // match course name with the query keyword
  if (filters.courseName) {
    const courseNameIncluded =
      matchesQueryString(course.nameEN, filters.courseName) ||
      matchesQueryString(course.nameZH, filters.courseName);

    if (!courseNameIncluded) {
      return false;
    }
  }

  //match language of instruction with the query language
  if (filters.lang) {
    let lang = filters.lang === "EN" ? "English" : "Chinese";
    if (course.languageOfLecture !== lang) {
      return false;
    }
  }

  // Match class time with the query keyword
  if (filters.classTime) {
    const classTimeIncluded = course.classTime.some((time) =>
      matchesQueryString(time, filters.classTime as string)
    );

    if (!classTimeIncluded) {
      return false;
    }
  }

  //match class venue with the query keyword
  if (filters.venue) {
    const classVenueIncluded = matchesQueryString(
      course.classroom.join(""),
      filters.venue
    );

    if (!classVenueIncluded) {
      return false;
    }
  }

  //passed all filters, return true
  return true;
}

import { SITE } from "@/config";
import { Metadata } from "next";

export function generateMetadata(
  pageTitle: string,
  description?: string
): Metadata {
  return {
    title: `${SITE.title} | ${pageTitle}`,
    description: description || SITE.desc || "Default description",
  };
}
