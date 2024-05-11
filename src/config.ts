//general config of the site

export const SITE: Site = {
  // replace this with your deployed domain
  websiteURL: "https://nthuccc.vercel.app",
  author: "S.K.",
  desc: "A better NTHU Course Catalog Client experience",
  title: "NTHUCCC",
  ogImage: "og-image.png",
  hashTag: "NTHUCCC",
  lightAndDarkMode: false, // make it only darkmode
  caveats: `This site is NOT endorsed by NTHU.\nWe provide the data "as is".`,
};

export const resourceURL =
  process.env.NODE_ENV === "production"
    ? SITE.websiteURL
    : "http://localhost:3000";

export const defaultSemester = "11220";
//change to 11310 when new data is available
