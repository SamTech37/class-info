import { Button } from "@mantine/core";

export function QueryButton() {
  const fetchCourses = async () => {
    const source = `/api`;
    try {
      const response = await fetch(source);

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
