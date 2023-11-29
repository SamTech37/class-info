//a server component that renders the result of searching courses
//list out all the courses with important information
//design https://ui.mantine.dev/component/table-sort/

import { SearchResults } from "@/Components/SearchResults";

//refactor this
interface QueryParams {
  semester: string;
  courseName?: string;
  instructor?: string;
  department?: string;
}
const siteURL =
  process.env.NODE_ENV === "production"
    ? "http://nthuccc.vercel.app"
    : "http://localhost:3000";
async function getCourseList(query: QueryParams) {
  let resourceURL = `${siteURL}/api/${query.semester}?`;
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
      <h1>{`Search Result of `}</h1>
      <SearchResults courseList={courseList} />
    </>
  );
}
