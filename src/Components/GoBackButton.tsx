//a function component
//a button that goes back to the previous page
//and if there is no previous page, goes back to the home page

//related docs: https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#using-the-native-history-api
import { Button } from "@mantine/core";

export default function GoBackButton() {
  return <Button onClick={() => window.history.back()}>Go Back</Button>;
}
