//general config of the site
//and some data referenced in multiple places

import departmentJson from "./../public/Departments.json";
import venueJson from "./../public/Venues.json";

export const DepartmentList = departmentJson.codes;
export const VenueList = venueJson.buildings.map((venue) => venue.code);
export const SITE: Site = {
  // replace this with your deployed domain
  websiteURL: "https://nthuccc.vercel.app",
  author: "S.K.",
  desc: "A better NTHU Course Catalog Client experience",
  title: "NTHUCCC",
  ogImage: "og-image.png",
  hashTag: "NTHUCCC",
  lightAndDarkMode: false, // darkmode only
  caveats: `This site is NOT endorsed by NTHU.\nWe provide the data "as is".`,
};

export const resourceURL =
  process.env.NODE_ENV === "production"
    ? SITE.websiteURL
    : "http://localhost:3000";

//[TODO]: uncomment the options when new data is available
export const availableSemesters = [
  { label: "112上", value: "11210" },
  { label: "112下", value: "11220" },
  // { label: "112暑", value: "11230" },
  { label: "113上", value: "11310" },
  { label: "113下", value: "11320" },
  // { label: "113暑", value: "11330" },
  // { label: "114上", value: "11410" },
  // { label: "114下", value: "11420" },
  // { label: "114暑", value: "11430" },
  // { label: "115上", value: "11510" },
  // { label: "115下", value: "11520" },
];
export const defaultSemester =
  availableSemesters[availableSemesters.length - 1].value;

type linkFromNTHU = {
  URL: string;
  title: string;
};
type refLinks = {
  [key: string]: linkFromNTHU;
};
export const referenceLinks: refLinks = {
  DivisionOfCirriculumHomepage: {
    URL: "https://curricul.site.nthu.edu.tw/",
    title: "清大課務組",
  },
  DoCMainNotices: {
    URL: "https://curricul.site.nthu.edu.tw/p/403-1208-8507-1.php?Lang=zh-tw",
    title: "認識科號、節次、開課學分規定",
  },
  courseIDRef: {
    URL: "https://curricul.site.nthu.edu.tw/p/406-1208-166583,r9680.php",
    title: "認識清大科號",
  },
  departmentCodes: {
    URL: "https://curricul.site.nthu.edu.tw/p/406-1208-189767,r8789.php",
    title: "系所代碼",
  },

  buildingCodes: {
    URL: "https://curricul.site.nthu.edu.tw/p/406-1208-50862,r8507.php",
    title: "館舍代碼",
  },
  GEObjectRef: {
    URL: "https://curricul.site.nthu.edu.tw/p/404-1208-11133.php",
    title: "通識課程選課對象",
  },
  NTHUCourseOpendata: {
    URL: "https://curricul.site.nthu.edu.tw/p/406-1208-111356,r7883.php?Lang=zh-tw",
    title: "清大課程開放資料（本站資料來源）",
  },

  NTHULabook: {
    URL: "https://nthulabook.onrender.com/",
    title: "Labook 清大研究所畢業論文與畢業時長統計",
  },
};

export const GEObjectDecorColors = {
  type1: { from: "violet", to: "yellow", deg: 90 },
  type3: { from: "cyan", to: "green", deg: 90 },
  type7: { from: "red", to: "cyan", deg: 90 },
};
