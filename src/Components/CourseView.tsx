"use client";
import { Table } from "@mantine/core";
import GoBackButton from "./GoBackButton";

// TODO: better UI for this
export function CourseView({ courseData }: { courseData: Course }) {
  const rows = Object.entries(courseData).map(([key, value]) => (
    <Table.Tr key={key}>
      <Table.Td>{key}</Table.Td>
      <Table.Td>{value}</Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
      <GoBackButton />
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Key</Table.Th>
            <Table.Th>Value</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}
