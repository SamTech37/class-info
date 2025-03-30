//Home Page of the website
//which is also the search page

// "use client";
import { SearchForm } from "@/Components/searchForm";
import { Title } from "@mantine/core";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTHUCCC - Search Course by Keywords",
  description: "Search courses of NTHU",
};
export default function Home() {
  return (
    <>
      <Title mb="xs">搜尋課程</Title>
      <SearchForm />
    </>
  );
}
