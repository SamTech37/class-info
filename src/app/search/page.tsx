// a server component that fetches & renders the result of searching courses
// list out all the courses with key information
// the search result page
// for details, see course/[courseID]/page.tsx

import GoBackButton from "@/Components/GoBackButton";
import { SearchResults } from "@/Components/SearchResults";
import { resourceURL, defaultSemester } from "@/config";

//TODO: refactor this

async function getCourseList(query: QueryFilters) {
  let dynamicQueryURL = `${resourceURL}/api/${
    query.semester ? query.semester : defaultSemester
  }?`;
  //for keys in query, add to resourceURL
  for (const [key, value] of Object.entries(query)) {
    if (value != "") dynamicQueryURL += `${key}=${value}&`;
  }
  console.error("fetching ", dynamicQueryURL);

  const res = await fetch(dynamicQueryURL, { cache: "no-store" });
  //need to add options to the url
  return res.json();
}

export default async function SearchResultPage({
  searchParams,
}: {
  searchParams: QueryFilters;
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
