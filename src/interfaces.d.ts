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

  remarks: string; // 備註
  prerequisites: string; // 擋修說明
  courseRestrictions: string; // 課程限制說明
  expertises: string[]; // 第一二專長對應
  creditPrograms: string[]; // 學分學程對應
  noExtraEnrollmentDescription: string; // 不可加簽說明
  requiredOrOptionalFor: string[]; // 必選修說明
}

interface CourseRaw {
  科號: string;
  課程中文名稱: string;
  課程英文名稱: string;
  學分數: number;
  人限: number | ""; // 若為空字串表示無人數限制
  新生保留人數: number; //若為0表示無新生保留人數
  通識對象: `*${number}`; //代碼說明(課務組)
  通識類別: string;
  授課語言: "中" | "英";
  備註: string;
  停開註記: "停開" | "";
  教室與上課時間: string; //一間教室對應一個上課時間，中間以tab分隔；多個上課教室以new line字元分開

  授課教師: string; //多位教師授課以new line字元分開；教師中英文姓名以tab分開
  擋修說明: string; //會有html entities
  課程限制說明: string;
  第一二專長對應: string; //對應多個專長用\t分隔
  學分學程對應: string; // 用半形/分隔
  不可加簽說明: string;
  必選修說明: string; //多個必選修班級用tab字元分隔
}

/*
an example of a CourseRaw object:
{
    "科號": "11210AES 470100",
    "課程中文名稱": "永續環境治理的設計思考",
    "課程英文名稱": "Design Thinking for Sustainable Environmental Governance",
    "學分數": "3",
    "人限": "50",
    "新生保留人數": "0",
    "通識對象": "*1",
    "通識類別": "自然科學領域 Elective GE course: Natural Sciences",
    "授課語言": "中",
    "備註": "本課程為16週課程，本學期主題為「與新竹河好-Living in Harmony with the Hsinchu River」",
    "停開註記": "",
    "教室與上課時間": "BMES醫環301\tR5R6R7\n",
    "授課教師": "周秀專\tCHOU, HSIU-CHUAN\n陳俊銘\tCHEN, CHUN-MING\n",
    "擋修說明": "",
    "課程限制說明": "",
    "第一二專長對應": "環境科技學程(第二專長)",
    "學分學程對應": "(跨領域)城鄉創生學分學程",
    "不可加簽說明": "",
    "必選修說明": ""
}
*/

type Site = {
  websiteURL: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  hashTag: string;
  lightAndDarkMode: boolean;

  //and other important configurations
  caveats: string;
};

type QueryFilters = {
  semester?: string | null;
  department?: string | null;
  instructor?: string | null;
  courseName?: string | null;
  classTime?: string | null;
  venue?: string | null;
  lang?: "EN" | "ZH" | "" | null;
  //English, Chinese, or not specified
};

type linkFromNTHU = {
  URL: string;
  title: string;
};
type refLinks = {
  [key: string]: linkFromNTHU;
};
