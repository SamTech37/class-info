//Home Page of the website
//which is also the search page

"use client";
import { SearchForm } from "@/Components/searchForm";
import { Title } from "@mantine/core";
export default function Home() {
  return (
    <>
      <Title mb="xs">搜尋課程</Title>
      <SearchForm />
    </>
  );
}
