import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Untuk ikon tombol kembali
import { useNavigation } from "@react-navigation/native"; // Untuk navigasi

export default function AbsensiScreen() {
  const navigation = useNavigation();

  // Data awal siswa
  const [students, setStudents] = useState([
    { id: "1", name: "Andi Wijaya", status: "Belum Absen" },
    { id: "2", name: "ina Susanti", status: "Belum Absen" },
    { id: "3", name: "Beni Haryanto", status: "Belum Absen" },
    { id: "4", name: "Siti Marlina", status: "Belum Absen" },
    { id: "5", name: "Eka Fitriya", status: "Belum Absen" },
    { id: "5", name: "Anisatur Rohmah", status: "Belum Absen" },
    { id: "5", name: "Nadia Husna", status: "Belum Absen" },
    { id: "5", name: "Ferdi Anysah", status: "Belum Absen" },
  ]);

  // Fungsi untuk mengupdate status absensi siswa
  const updateStatus = (id, newStatus) => {
    setStudents((prevStudents) => prevStudents.map((student) => (student.id === id ? { ...student, status: newStatus } : student)));
  };

  // Menghitung rekap absensi
  const summary = students.reduce(
    (acc, student) => {
      if (student.status === "Hadir") acc.present += 1;
      if (student.status === "Alpha") acc.absent += 1;
      if (student.status === "Izin") acc.permit += 1;
      return acc;
    },
    { present: 0, absent: 0, permit: 0 }
  );

  return (
    <View style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#002B5B" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Absensi Siswa</Text>

      {/* Daftar siswa */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.statusText}>{item.status}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.presentButton]} onPress={() => updateStatus(item.id, "Hadir")}>
                <Text style={styles.buttonText}>Hadir</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.absentButton]} onPress={() => updateStatus(item.id, "Alpha")}>
                <Text style={styles.buttonText}>Alpha</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.permitButton]} onPress={() => updateStatus(item.id, "Izin")}>
                <Text style={styles.buttonText}>Izin</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Rekap absensi */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Hadir: {summary.present} | Alpha: {summary.absent} | Izin: {summary.permit}
        </Text>
      </View>
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
    marginBottom: 10,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#002B5B",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  statusText: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  presentButton: {
    backgroundColor: "#002B5B",
  },
  absentButton: {
    backgroundColor: "#002B5B",
  },
  permitButton: {
    backgroundColor: "#002B5B",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#002B5B",
    borderRadius: 10,
  },
  summaryText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
