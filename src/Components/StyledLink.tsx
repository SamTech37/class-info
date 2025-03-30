"use client";

import Link from "next/link";
import { Anchor, AnchorProps } from "@mantine/core";

export default function StyledLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
} & AnchorProps) {
  // Add any additional props you want to pass to the Anchor component
  return (
    <Anchor {...props} component={Link} href={href}>
      {children}
    </Anchor>
  );
}
