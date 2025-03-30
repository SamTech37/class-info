import Link from "next/link";
import { NavLink, Stack } from "@mantine/core";

type Tabs = {
  label: string;
  href: string;
  labelEn?: string;
};

const tabs: Tabs[] = [
  { label: "欄位搜尋", href: "/", labelEn: "Search by Keyword" },
  { label: "查科號", href: "/course", labelEn: "Search by Course ID" },
  { label: "實用連結", href: "/useful-links", labelEn: "Useful Links" },
  // { label: "目錄", href: "/catalog" },
  // { label: "關於", href: "/about" },
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
          description={tab.labelEn}
        />
      ))}
    </Stack>
  );
}
