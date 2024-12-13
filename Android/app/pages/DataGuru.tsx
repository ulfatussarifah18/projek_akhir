import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; // Pastikan Anda menggunakan react-navigation

export default function DataGuruScreen() {
  const navigation = useNavigation(); // Untuk navigasi kembali

  // Data contoh guru
  const dataGuru = [
    { id: "1", name: "Budi Santoso", position: "Guru Matematika" },
    { id: "2", name: "Siti Aminah", position: "Guru Bahasa Indonesia" },
    { id: "3", name: "Hendra Saputra", position: "Guru IPA" },
    { id: "4", name: "Ratna Sari", position: "Guru IPS" },
  ];

  // Fungsi untuk menangani tombol detail
  const handleDetail = (guru) => {
    alert(`Detail Guru: \nNama: ${guru.name}\nPosisi: ${guru.position}`);
  };

  return (
    <View style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={24} color="#fff" />
        <Text style={styles.backButtonText}>Kembali</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Data Guru</Text>
      <FlatList
        data={dataGuru}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.infoContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.positionText}>{item.position}</Text>
            </View>
            <TouchableOpacity style={styles.detailButton} onPress={() => handleDetail(item)}>
              <FontAwesome name="info-circle" size={24} color="#fff" />
              <Text style={styles.detailButtonText}>Detail</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#002B5B",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#002B5B",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  infoContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  positionText: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  detailButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#002B5B",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  detailButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 5,
  },
});
