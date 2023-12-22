export const fetchAllCoursesFromNTHU = async () => {
  const resourceURL = `https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/JH/OPENDATA/open_course_data.json`;
  const res = await fetch(resourceURL);
  function getDepartment(courseID: string): string {
    return courseID.replace(/[\d\s]/g, "");
    //replace all digits and whitespaces
  }
  const courseListRaw: CourseRaw[] = await res.json();

  //turn courseListRaw into Course[]
  const courseList: Course[] = courseListRaw.map((item) => {
    return {
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
        .slice(0, -1) //remove last empty lines
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
      //remove the last empty line
    };
  });
  return courseList;
};
