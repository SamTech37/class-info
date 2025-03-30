import Link from "next/link";
import { ScrollArea, Stack, NavLink, Title } from "@mantine/core";
import { DepartmentList } from "@/config";

export default function Home() {
  const departments = DepartmentList;

  return (
    <>
      <Title order={1}>Departments</Title>
      <ScrollArea h="60vh" type="always">
        <Stack>
          {departments.map((dep, index) => (
            <NavLink
              component={Link}
              href={`/departments/${dep}`}
              key={index}
              label={dep}
            />
          ))}
        </Stack>
      </ScrollArea>
    </>
  );
}
