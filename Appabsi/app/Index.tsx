import React, { useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default function HomeScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Splash screen selesai");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/kalender.png")} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>ABSENSI SISWA</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#002B5B",
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 20,
  },
});
