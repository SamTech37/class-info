//Home Page of the website
//which is also the search page

// "use client";
import { SearchForm } from "@/Components/searchForm";
import { Title } from "@mantine/core";
import { SITE } from "@/config";
import { Metadata } from "next";
import { generateMetadata } from "@/utility"; // Correct import path

const pageTitle = "搜尋課程 Search Courses";
export const metadata = generateMetadata(pageTitle, "Search courses of NTHU");

export default function Home() {
  return (
    <>
      <Title order={2} mb="md">
        {"搜尋課程 Search Courses"}
      </Title>
      <SearchForm />
    </>
  );
}
