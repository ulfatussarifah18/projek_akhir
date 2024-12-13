import React from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image source={require("../assets/images/kalender1.png")} style={styles.image} />
      <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#a3a3a3" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#a3a3a3" secureTextEntry={true} />
      <TouchableOpacity
        onPress={() => {
          router.push("/ResetPassword");
        }}
        style={styles.restButton}
      >
        <Text style={styles.forgotPassword}>Lupa Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.push("/HomeScreen");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    paddingTop: 40,
  },
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "#002B5B",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  forgotPassword: {
    color: "#002B5B",
    fontSize: 12,
    alignSelf: "flex-end",
    marginRight: "10%",
    marginBottom: 20,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#002B5B",
    borderRadius: 10,
    marginTop: 60,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: "auto",
    marginHorizontal: "auto",
  },
  restButton: {
    height: 50,
    width: "80%",
  },
});

// 002B5B
