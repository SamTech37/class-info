//a server component that will fetch with the courseID
//and list out all the detailed info of the course

async function getCourseData() {
  const res = await fetch(`/api/course`);
  //need to set up another api endpoint
  return res.json();
}

export default async function CoursePage({
  params,
}: {
  params: { courseID: string };
}) {
  //const data = await getCourseData();
  return <h1>Welcome to the page of courseID:{params.courseID}</h1>;
}
