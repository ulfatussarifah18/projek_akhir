import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();

  // Ambil tanggal saat ini
  const currentDate = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Selamat Pagi</Text>
        <Text style={styles.userName}>Ulfatus Sarifah</Text>
      </View>

      {/* Tanggal */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{currentDate}</Text>
      </View>

      {/* Menu Utama */}
      <View style={styles.menuContainer}>
        <View style={styles.menuRow}>
          <TouchableOpacity
            onPress={() => {
              router.push("/pages/DataGuru");
            }}
            style={styles.menuItem}
          >
            <FontAwesome name="user" size={24} color="#002B5B" />
            <Text style={styles.menuText}>Data Guru</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="users" size={24} color="#002B5B" />
            <Text style={styles.menuText}>Data Siswa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="calendar" size={24} color="#002B5B" />
            <Text style={styles.menuText}>Jadwal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuRow}>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="check-square" size={24} color="#002B5B" />
            <Text style={styles.menuText}>Absensi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="book" size={24} color="#002B5B" />
            <Text style={styles.menuText}>Mapel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome name="building" size={24} color="#002B5B" />
            <Text style={styles.menuText}>Kelas</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tombol Pengumuman & Riwayat */}
      <View style={styles.announcementContainer}>
        <TouchableOpacity style={styles.announcementButton}>
          <FontAwesome name="bell" size={24} color="#fff" />
          <Text style={styles.announcementText}>Pengumuman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.historyButton}>
          <FontAwesome name="history" size={24} color="#fff" />
          <Text style={styles.historyText}>Riwayat</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="home" size={24} color="#fff" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome name="user-circle" size={24} color="#fff" />
          <Text style={styles.footerText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    backgroundColor: "#002B5B",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  userName: {
    color: "#fff",
    fontSize: 18,
  },
  dateContainer: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  dateText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "bold",
  },
  menuContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  menuRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  menuItem: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  menuText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 5,
    textAlign: "center",
  },
  announcementContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  announcementButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#002B5B",
    marginHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    width: "70%",
    marginBottom: 20,
  },
  announcementText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  historyButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#002B5B",
    marginHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
    width: "70%",
  },
  historyText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#002B5B",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  footerItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 12,
  },
});
