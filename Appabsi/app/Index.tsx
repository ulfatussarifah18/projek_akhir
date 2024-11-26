import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Selamat Datang</Text>
        <Text style={styles.nameText}>Fajrina Wardani</Text>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="book" size={32} color="white" />
          <Text style={styles.menuText}>Data Guru</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="address-book" size={32} color="white" />
          <Text style={styles.menuText}>Data Siswa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="file-text" size={32} color="white" />
          <Text style={styles.menuText}>Laporan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="camera" size={32} color="white" />
          <Text style={styles.menuText}>Absensi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="clipboard" size={32} color="white" />
          <Text style={styles.menuText}>Nilai Siswa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="history" size={32} color="white" />
          <Text style={styles.menuText}>Riwayat</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.announcementButton}>
        <FontAwesome name="bell" size={24} color="white" />
        <Text style={styles.announcementText}>Pengumuman</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="home" size={24} color="white" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="user" size={24} color="white" />
          <Text style={styles.footerText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    paddingTop: 40,
  },
  header: {
    backgroundColor: "#ff5e8e",
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 18,
    color: "white",
  },
  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  menuItem: {
    width: 100,
    height: 100,
    backgroundColor: "#ff5e8e",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  menuText: {
    color: "white",
    fontSize: 12,
    marginTop: 8,
    fontWeight: "bold",
  },
  announcementButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff5e8e",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 30,
  },
  announcementText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: "#ff5e8e",
    paddingVertical: 10,
  },
  footerItem: {
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
});
