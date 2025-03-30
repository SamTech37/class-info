"use client";
import { List } from "@mantine/core";
import Link from "next/link";
import { referenceLinks } from "@/config"; // Adjust based on your actual type

export function UsefulLinksList() {
  return (
    <List>
      {Object.entries(referenceLinks).map(([key, link]) => (
        <List.Item key={key}>
          <Link href={link.URL} target="_blank">
            {link.title}
          </Link>
        </List.Item>
      ))}
    </List>
  );
}
