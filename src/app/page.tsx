"use client";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, ScrollArea } from "@mantine/core";
import jsonData from "../Components/Departments.json";

export default function Home() {
  const [opened, { toggle }] = useDisclosure();
  const departments = jsonData;

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          NTHU Course Info
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section>Colleges</AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea}>
          {departments.map((dep, index) => (
            <Link key={index} href={`/${dep}`}>
              <p>{dep}</p>
            </Link>
          ))}
        </AppShell.Section>
        <AppShell.Section>This site is NOT endorsed by NTHU</AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>Welcome</AppShell.Main>
    </AppShell>
  );
}
