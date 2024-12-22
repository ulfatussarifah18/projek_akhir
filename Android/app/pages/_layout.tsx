import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DataGuru" />
      <Stack.Screen name="DataSiswa" />
      <Stack.Screen name="Jadwal" />
      <Stack.Screen name="Absensi" />
      <Stack.Screen name="Mapel" />
      <Stack.Screen name="Kelas" />
    </Stack>
  );
}
