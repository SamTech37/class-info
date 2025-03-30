import { Container, Title } from "@mantine/core";
import { UsefulLinksList } from "@/Components/UsefulLinksList";

import { generateMetadata } from "@/utility"; // Correct import path

const pageTitle = "實用連結 Useful Links";
export const metadata = generateMetadata(pageTitle, "Search courses of NTHU");

export default function ReferenceLinkPage() {
  return (
    <Container>
      <Title order={1} mb="md">
        {pageTitle}
      </Title>
      <UsefulLinksList />
    </Container>
  );
}
