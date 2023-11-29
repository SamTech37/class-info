"use client";
import { Table } from "@mantine/core";
import Link from "next/link";
//TODO: better UI for this
//refactor change all courseData to courseList

export function SearchResults({ courseList }: { courseList: Course[] }) {
  const rows = courseList.map((course) => (
    <Table.Tr key={course.courseID}>
      <Table.Td>
        <Link href={`/course/${course.courseID}`}>{course.courseID}</Link>
      </Table.Td>
      <Table.Td>{course.nameZH}</Table.Td>
    </Table.Tr>
  ));
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>courseID</Table.Th>
          <Table.Th>courseName</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
