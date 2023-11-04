//ref: https://curricul.site.nthu.edu.tw/p/406-1208-111356,r7883.php?Lang=zh-tw
interface Course {
  courseID: string; // 科號
  department: string; //系所
  nameZH: string; // 課程中文名稱
  nameEN: string; // 課程英文名稱
  credits: number; // 學分數
  enrollmentLimit: number; // 人限：若為空字串表示無人數限制
  freshmanReservedSeats: number; // 新生保留人數
  GEObject: string; // 通識對象
  GECategory: string; // 通識類別
  languageOfLecture: "Chinese" | "English"; // 授課語言
  suspensionStatus: "停開" | ""; // 停開註記
  classroom: string[]; // 教室
  classTime: string[]; //與上課時間
  instructorNamesZH: string[]; // 授課教師中文名
  instructorNamesEN: string[]; // 授課教師英文名

  reamarks: string; // 備註
  prerequisites: string; // 擋修說明
  courseRestrictions: string; // 課程限制說明
  expertises: string[]; // 第一二專長對應
  creditPrograms: string; // 學分學程對應
  noExtraEnrollmentDescription: string; // 不可加簽說明
  requiredFor: string[]; // 必修說明
  optionalFor: string[]; // 選修說明
}
