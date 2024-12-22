import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="ResetPassword" />
      <Stack.Screen name="HomeScreen" />
      <Stack.Screen name="Profile" />
    </Stack>
  );
}
