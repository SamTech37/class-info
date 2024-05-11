// Display search results in a table

"use client";
import { Table, Button, Badge } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { GEObjectColors } from "@/config";
const tableHearder = [
  "科號",
  "課名",
  "學分",
  "老師",
  "時間地點",
  "人限|新生",
  "更多資訊",
];
//TODO: different interface for English users
export function SearchResults({ courseList }: { courseList: Course[] }) {
  const trimSpaces = (str: string) => str.replace(/\s+/g, "");
  const rows = courseList.map((course) => (
    <Table.Tr key={trimSpaces(course.courseID)}>
      <Table.Td>
        <Link href={`/course/${trimSpaces(course.courseID)}`}>
          {trimSpaces(course.courseID)}
        </Link>
      </Table.Td>
      {/* TODO: change color if it's GE course*/}
      <Table.Td>
        <CourseNameBadge course={course} />
      </Table.Td>
      <Table.Td>{course.credits}</Table.Td>
      <Table.Td>
        {course.instructorNamesZH.map((instructor, index) => (
          <div key={index}>{instructor}</div>
        ))}
      </Table.Td>
      <Table.Td>
        {course.classTime.map((time, index) => (
          <div key={index}>{`${time}@${course.classroom[index]}`}</div>
        ))}
      </Table.Td>
      <Table.Td>
        {`${course.enrollmentLimit ? course.enrollmentLimit : "無"} | ${
          course.freshmanReservedSeats ? course.freshmanReservedSeats : "無"
        }`}
      </Table.Td>
      <Table.Td>
        <Link href={`/course/${trimSpaces(course.courseID)}`}>
          <Button>詳細</Button>
        </Link>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Table stickyHeader highlightOnHover verticalSpacing="sm">
      <Table.Thead>
        <Table.Tr>
          {tableHearder.map((header) => (
            <Table.Th key={header}>{header}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

//TODO: different interface for English users
const tableHearderEN = [
  "CourseID",
  "Name",
  "Credits",
  "Instuctors",
  "Time & Venue",
  "Limit|Freshman reserved",
  "More Info",
];

export function SearchResultsEN({ courseList }: { courseList: Course[] }) {
  const trimSpaces = (str: string) => str.replace(/\s+/g, "");
  const rows = courseList.map((course) => (
    <Table.Tr key={trimSpaces(course.courseID)}>
      <Table.Td>
        <Link href={`/course/${trimSpaces(course.courseID)}`}>
          {trimSpaces(course.courseID)}
        </Link>
      </Table.Td>
      {/* TODO: change color if it's GE course*/}
      <Table.Td>{course.nameEN}</Table.Td>
      <Table.Td>{course.credits}</Table.Td>
      <Table.Td>
        {course.instructorNamesEN.map((instructor, index) => (
          <div key={index}>{instructor}</div>
        ))}
      </Table.Td>
      <Table.Td>
        {course.classTime.map((time, index) => (
          <div key={index}>{`${time}@${course.classroom[index]}`}</div>
        ))}
      </Table.Td>
      <Table.Td>
        {`${course.enrollmentLimit ? course.enrollmentLimit : "None"} | ${
          course.freshmanReservedSeats ? course.freshmanReservedSeats : "None"
        }`}
      </Table.Td>
      <Table.Td>
        <Button>Info</Button>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Table stickyHeader highlightOnHover verticalSpacing="sm">
      <Table.Thead>
        <Table.Tr>
          {tableHearderEN.map((header) => (
            <Table.Th key={header}>{header}</Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

function CourseNameBadge({ course }: { course: Course }) {
  switch (course.GEObject) {
    case "*1":
      return (
        <Badge size="xl" variant="gradient" gradient={GEObjectColors.type1}>
          {course.nameZH}
        </Badge>
      );
    case "*3":
      return (
        <Badge size="xl" variant="gradient" gradient={GEObjectColors.type3}>
          {course.nameZH}
        </Badge>
      );
    case "*7":
      return (
        <Badge size="xl" variant="gradient" gradient={GEObjectColors.type7}>
          {course.nameZH}
        </Badge>
      );
    default:
      return <>{course.nameZH}</>;
  }
}
