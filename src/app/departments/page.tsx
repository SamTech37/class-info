import Link from "next/link";
import { ScrollArea, Stack, NavLink } from "@mantine/core";
import jsonData from "./Departments.json";

export default function Home() {
  const departments = jsonData;

  return (
    <>
      Departments
      <ScrollArea h="60vh" type="always">
        <Stack>
          {departments.map((dep, index) => (
            <NavLink component={Link} href={dep} key={index} label={dep} />
          ))}
        </Stack>
      </ScrollArea>
    </>
  );
}
