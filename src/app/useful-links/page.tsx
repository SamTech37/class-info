import { Container, Title } from "@mantine/core";
import { UsefulLinksList } from "@/Components/UsefulLinksList";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTHUCCC - Useful Links",
};

export default function ReferenceLinkPage() {
  //get courseID from params

  return (
    <Container>
      <Title order={1} mb="md">
        實用連結
      </Title>
      <UsefulLinksList />
    </Container>
  );
}
