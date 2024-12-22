import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Untuk ikon
import { useNavigation } from "@react-navigation/native";

export default function DataSiswaScreen() {
  const navigation = useNavigation();

  // Data lengkap siswa
  const dataSiswa = [
    { id: "1", name: "Andi Wijaya", class: "X IPA 1", birthDate: "2006-05-12", address: "Jl. Merpati No. 5, Jakarta" },
    { id: "2", name: "Rina Susanti", class: "X IPA 2", birthDate: "2006-08-19", address: "Jl. Anggrek No. 8, Bandung" },
    { id: "3", name: "Beni Haryanto", class: "X IPS 1", birthDate: "2006-11-23", address: "Jl. Melati No. 3, Surabaya" },
    { id: "4", name: "Siti Marlina", class: "XI IPA 1", birthDate: "2005-03-15", address: "Jl. Kenanga No. 6, Medan" },
    { id: "5", name: "Anisatul Rohmah", class: "XI IPA 1", birthDate: "2005-07-07", address: "Jl. Mawar No. 9, Yogyakarta" },
    { id: "6", name: "Eka Fitriya", class: "XI IPA 1", birthDate: "2005-12-20", address: "Jl. Cemara No. 1, Semarang" },
    { id: "7", name: "Nadia Husna", class: "XII IPA 1", birthDate: "2004-02-28", address: "Jl. Dahlia No. 2, Malang" },
    { id: "8", name: "Ferdi Ansyah", class: "XII IPA 1", birthDate: "2004-06-14", address: "Jl. Bunga Raya No. 4, Palembang" },
  ];

  // Fungsi untuk menangani tombol detail
  const handleDetail = (siswa) => {
    alert(`Detail Siswa:\n` + `Nama: ${siswa.name}\n` + `Kelas: ${siswa.class}\n` + `Tanggal Lahir: ${siswa.birthDate}\n` + `Alamat: ${siswa.address}`);
  };

  return (
    <View style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#002B5B" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Data Siswa</Text>
      <FlatList
        data={dataSiswa}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.infoContainer}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.classText}>{item.class}</Text>
              <Text style={styles.classText}>Tanggal Lahir: {item.birthDate}</Text>
              <Text style={styles.classText}>Alamat: {item.address}</Text>
            </View>
            <TouchableOpacity style={styles.detailButton} onPress={() => handleDetail(item)}>
              <Ionicons name="information-circle-outline" size={24} color="#fff" />
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
    marginBottom: 20,
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
  classText: {
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
