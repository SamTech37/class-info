//a client component
//a button that goes back to the previous page
//related docs: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#using-the-native-history-api

"use client";
import { Button } from "@mantine/core";

export default function GoBackButton() {
  return <Button onClick={() => window.history.back()}>Go Back</Button>;
}
