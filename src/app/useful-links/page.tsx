"use client";
import { referenceLinks } from "@/config";
import { List, Container, Title } from "@mantine/core";
import Link from "next/link";

export default function ReferenceLinkPage() {
  //get courseID from params

  return (
    <Container>
      <Title order={1} mb="md">
        實用連結
      </Title>
      <List>
        {Object.entries(referenceLinks).map(([key, link]) => (
          <List.Item key={key}>
            <Link href={link.URL} target="_blank">
              {link.title}
            </Link>
          </List.Item>
        ))}
      </List>
    </Container>
  );
}
