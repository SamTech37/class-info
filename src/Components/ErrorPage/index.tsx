//a 500 server error page

"use client";
import Link from "next/link";
import { Title, Text, Button, Container, Group } from "@mantine/core";
import classes from "./ServerError.module.css";

export function ServerError({ reset }: { reset: () => void }) {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Something bad just happened...</Title>
        <Text size="lg" ta="center" className={classes.description}>
          Our servers could not handle your request. Don&apos;t worry, our
          development team was already notified. Try refreshing the page.
        </Text>
        <Group justify="center" align="end">
          <Button variant="white" size="md" onClick={reset}>
            Refresh the page
          </Button>
          <Link href="/">
            <Button size="md">Take me back to home page</Button>
          </Link>
        </Group>
      </Container>
    </div>
  );
}
