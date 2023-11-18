//Root layout and navbar for the app
"use client";

import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AppShell, Burger, Group, ScrollArea, Skeleton } from "@mantine/core";

// export const metadata = {
//   title: "NTHUCCC",
//   description: "A better NTHU Course Catalog Client experience",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <html lang="zh">
      <head>
        <ColorSchemeScript />
        <title>NTHUCCC</title>
        <meta
          name="description"
          content="A better NTHU Course Catalog Client experience"
        />
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
                NTHUCCC
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              <AppShell.Section>Side Navigation</AppShell.Section>
              <AppShell.Section grow my="md" component={ScrollArea}>
                {Array(60)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} h={28} mt="sm" animate={false} />
                  ))}
              </AppShell.Section>
              <AppShell.Section>
                This site is NOT endorsed by NTHU
              </AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
