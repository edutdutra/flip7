import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";

export default function Layout() {
  return (
    <Fragment>
      <StatusBar style="dark" />
      <Stack />
    </Fragment>
  );
}
