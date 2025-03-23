//Root layout and navbar for the app
"use client";

import "@mantine/core/styles.css";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, Badge } from "@mantine/core";
import NavLinks from "@/Components/NavLinks";
import Link from "next/link";

import { SITE } from "@/config";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <html lang="zh" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <title>{SITE.title}</title>
        <meta name="description" content={SITE.desc} />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: 300,
              breakpoint: "sm",
              collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
            padding="md"
          >
            {/* 
            /// [TODO]
            /// refactor the AppShell to a new component
            */}
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger
                  opened={mobileOpened}
                  onClick={toggleMobile}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Burger
                  opened={desktopOpened}
                  onClick={toggleDesktop}
                  visibleFrom="sm"
                  size="sm"
                />
                <Link href="/">
                  <Badge size="lg">{SITE.title}</Badge>
                </Link>
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              <AppShell.Section grow my="md">
                <NavLinks />
              </AppShell.Section>
              <AppShell.Section>{SITE.caveats}</AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
