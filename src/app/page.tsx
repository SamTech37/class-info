"use client";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { ScrollArea } from "@mantine/core";
import jsonData from "../Components/Departments.json";

export default function Home() {
  const [opened, { toggle }] = useDisclosure();
  const departments = jsonData;

  return (
    <ScrollArea h={500} type="always">
      Welcome
      <div>
        {departments.map((dep, index) => (
          <Link key={index} href={`/${dep}`}>
            <p>{dep}</p>
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
}
