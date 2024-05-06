import Link from "next/link";
import { NavLink, Stack } from "@mantine/core";

type Tabs = {
  label: string;
  href: string;
};

const tabs: Tabs[] = [
  { label: "搜尋", href: "/" },
  { label: "查科號", href: "/course" },
  { label: "目錄", href: "/catalog" },
  { label: "關於", href: "/about" },
];

export default function NavLinks() {
  return (
    <Stack>
      {tabs.map((tab, index) => (
        <NavLink
          key={index}
          component={Link}
          href={tab.href}
          label={tab.label}
        />
      ))}
    </Stack>
  );
}
