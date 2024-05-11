//a server component that renders the result of searching courses
//list out all the courses with important information
//design https://ui.mantine.dev/component/table-sort/
//the search result page

import GoBackButton from "@/Components/GoBackButton";
import { SearchResults } from "@/Components/SearchResults";
import { SITE } from "@/config";

//TODO: refactor this
interface QueryParams {
  semester: string;
  courseName?: string;
  instructor?: string;
  department?: string;
}
const defaultSemester = "11210";
const siteURL =
  process.env.NODE_ENV === "production"
    ? SITE.websiteURL
    : "http://localhost:3000";
async function getCourseList(query: QueryParams) {
  let resourceURL = `${siteURL}/api/${
    query.semester ? query.semester : defaultSemester
  }?`;
  //for keys in query, add to resourceURL
  for (const [key, value] of Object.entries(query)) {
    if (value != "") resourceURL += `${key}=${value}&`;
  }
  console.error("fetching ", resourceURL);

  const res = await fetch(resourceURL, { cache: "no-store" });
  //need to add options to the url
  return res.json();
}

export default async function SearchResultPage({
  searchParams,
}: {
  searchParams: QueryParams;
}) {
  const courseList: Course[] = await getCourseList(searchParams);
  return (
    <>
      <GoBackButton />
      <h1>{`Search Result of `}</h1>
      <SearchResults courseList={courseList} />
    </>
  );
}
