import { Button } from "@mantine/core";

export function QueryButton() {
  //need to fix CORS issue
  const fetchCourses = async () => {
    const dataSourceURL = `https://www.ccxp.nthu.edu.tw/ccxp/INQUIRE/JH/OPENDATA/open_course_data.json`;

    try {
      const response = await fetch(dataSourceURL);

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        //setCourseData(data);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return <Button onClick={async () => await fetchCourses()}>Query</Button>;
}
