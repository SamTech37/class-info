// a server component that fetches & renders the result of searching courses
// list out all the courses with key information
// the search result page
// for details, see course/[courseID]/page.tsx

import GoBackButton from "@/Components/GoBackButton";
import { SearchResults } from "@/Components/SearchResults";
import { resourceURL, defaultSemester } from "@/config";
import { Divider } from "@mantine/core";
import { SearchForm } from "@/Components/searchForm";

//TODO: refactor this mess
async function getCourseList(query: QueryFilters) {
  let dynamicQueryURL = `${resourceURL}/api/${
    query.semester ? query.semester : defaultSemester
  }?`;

  //add each entries in filterQuery to resourceURL as query parameters
  for (const [key, value] of Object.entries(query)) {
    if (value != "") dynamicQueryURL += `${key}=${value}&`;
  }
  // console.error("fetching ", dynamicQueryURL);

  const res = await fetch(dynamicQueryURL, { cache: "no-store" });
  //need to add options to the url
  return res.json();
}

export default async function SearchResultPage({
  searchParams,
}: {
  searchParams: QueryFilters;
}) {
  const resultCourseList: Course[] = await getCourseList(searchParams);
  const semester = searchParams.semester
    ? searchParams.semester
    : defaultSemester;

  return (
    <>
      <GoBackButton />
      <h1>{`${semester + " 學期"}總共 ${resultCourseList.length} 筆符合`}</h1>
      {
        //<SearchForm />
        //could use a differ layout
        //or just make it collapsible
        //add a filter icon here
      }
      <SearchResults courseList={resultCourseList} />
      <Divider my="md" />
      <GoBackButton />
    </>
  );
}
