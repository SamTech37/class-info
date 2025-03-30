//a page to query course by ID

import { Title } from "@mantine/core";
import CourseIDForm from "@/Components/CourseIdForm";

import { SITE } from "@/config";

import { generateMetadata } from "@/utility"; // Correct import path

const pageTitle = "搜尋科號 Search by Course ID";
export const metadata = generateMetadata(pageTitle, "Search courses of NTHU");

export default function Home() {
  return (
    <>
      <Title order={2} mb="md">
        {pageTitle}
      </Title>
      <CourseIDForm />
    </>
  );
}
