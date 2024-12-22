import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Untuk ikon

export default function ProfileScreen() {
  const user = {
    name: "Ulfatus Sarifah",
    email: "Ulfatussarifah@gmail.com",
    profileImage: null, // Link gambar profil default
  };

  const handleEditProfile = () => {
    alert("Edit Profil belum tersedia.");
  };

  const handleLogout = () => {
    alert("Anda telah keluar.");
  };

  return (
    <View style={styles.container}>
      {/* Foto Profil */}
      <Image source={{ uri: user.profileImage }} style={styles.profileImage} />

      {/* Informasi Profil */}
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>

      {/* Tombol Aksi */}
      <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
        <Ionicons name="create-outline" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Edit Profil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5", // Latar belakang abu-abu ringan
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Membuat gambar bulat
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row", // Tombol dengan ikon dan teks sejajar
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    width: "80%",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    flex: 1,
  },
  icon: {
    marginRight: 10, // Jarak antara ikon dan teks
  },
  logoutButton: {
    backgroundColor: "#FF3B30", // Warna merah untuk tombol logout
  },
});
