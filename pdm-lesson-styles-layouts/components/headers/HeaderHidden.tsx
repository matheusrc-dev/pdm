import { Stack } from "expo-router";
import React from "react";

export default function HeaderHidden() {
  return <Stack.Screen options={{ headerShown: false }} />;
}
