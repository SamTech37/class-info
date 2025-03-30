//a page to query course by ID

import { Title } from "@mantine/core";
import CourseIDForm from "@/Components/CourseIdForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTHUCCC - Search by Course ID",
};

export default function Home() {
  return (
    <>
      <Title mb="xs">搜尋科號</Title>
      <CourseIDForm />
    </>
  );
}
