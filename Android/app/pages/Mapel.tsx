import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Picker } from "react-native"; // Menggunakan Picker
import { Ionicons } from "@expo/vector-icons"; // Untuk ikon tombol kembali
import { useNavigation } from "@react-navigation/native"; // Untuk navigasi

export default function MapelScreen() {
  const navigation = useNavigation();

  // Data awal mata pelajaran
  const [mapel, setMapel] = useState([
    { id: "1", name: "Matematika", time: "08:00 - 09:30", status: "Belum Mulai", className: "10-A" },
    { id: "2", name: "Bahasa Indonesia", time: "09:45 - 11:15", status: "Belum Mulai", className: "10-B" },
    { id: "3", name: "Kimia", time: "12:30 - 14:00", status: "Belum Mulai", className: "11-A" },
    { id: "4", name: "Sejarah", time: "14:15 - 15:45", status: "Belum Mulai", className: "11-B" },
    { id: "5", name: "Fisika", time: "16:00 - 17:00", status: "Belum Mulai", className: "12-A" },
  ]);

  // Fungsi untuk mengupdate status mapel
  const updateStatus = (id, newStatus) => {
    setMapel((prevMapel) => prevMapel.map((lesson) => (lesson.id === id ? { ...lesson, status: newStatus } : lesson)));
  };

  // Fungsi untuk mengupdate nama kelas
  const updateClass = (id, newClassName) => {
    setMapel((prevMapel) => prevMapel.map((lesson) => (lesson.id === id ? { ...lesson, className: newClassName } : lesson)));
  };

  // Fungsi untuk mengupdate jam pelajaran
  const updateTime = (id, newTime) => {
    setMapel((prevMapel) => prevMapel.map((lesson) => (lesson.id === id ? { ...lesson, time: newTime } : lesson)));
  };

  return (
    <View style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#002B5B" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Jadwal Mata Pelajaran</Text>

      {/* Daftar mapel */}
      <FlatList
        data={mapel}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nameText}>{item.name}</Text>

            {/* Row untuk memilih waktu dan kelas */}
            <View style={styles.rowContainer}>
              {/* Picker untuk memilih waktu */}
              <View style={styles.pickerContainer}>
                <Text style={styles.timeLabel}>Jam:</Text>
                <Picker selectedValue={item.time} style={styles.picker} onValueChange={(itemValue) => updateTime(item.id, itemValue)}>
                  <Picker.Item label="08:00 - 09:30" value="08:00 - 09:30" />
                  <Picker.Item label="09:45 - 11:15" value="09:45 - 11:15" />
                  <Picker.Item label="12:30 - 14:00" value="12:30 - 14:00" />
                  <Picker.Item label="14:15 - 15:45" value="14:15 - 15:45" />
                  <Picker.Item label="16:00 - 17:00" value="16:00 - 17:00" />
                </Picker>
              </View>

              {/* Picker untuk memilih kelas */}
              <View style={styles.pickerContainer}>
                <Text style={styles.classLabel}>Pilih Kelas:</Text>
                <Picker selectedValue={item.className} style={styles.picker} onValueChange={(itemValue) => updateClass(item.id, itemValue)}>
                  <Picker.Item label="10-A" value="10-A" />
                  <Picker.Item label="10-B" value="10-B" />
                  <Picker.Item label="10-C" value="10-C" />
                  <Picker.Item label="10-D" value="10-D" />
                  <Picker.Item label="10-E" value="10-E" />
                  <Picker.Item label="11-A" value="11-A" />
                  <Picker.Item label="11-B" value="11-B" />
                  <Picker.Item label="11-C" value="11-C" />
                  <Picker.Item label="11-D" value="11-D" />
                  <Picker.Item label="11-E" value="11-E" />
                  <Picker.Item label="12-A" value="12-A" />
                  <Picker.Item label="12-B" value="12-B" />
                  <Picker.Item label="12-C" value="12-C" />
                  <Picker.Item label="12-D" value="12-D" />
                  <Picker.Item label="12-E" value="12-E" />
                </Picker>
              </View>
            </View>

            {/* Status Ditempatkan Di Bawah Pilihan Kelas */}
            <Text style={styles.statusText}>Status: {item.status}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.ongoingButton]} onPress={() => updateStatus(item.id, "Sedang Berlangsung")}>
                <Text style={styles.buttonText}>Mulai</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.doneButton]} onPress={() => updateStatus(item.id, "Selesai")}>
                <Text style={styles.buttonText}>Selesai</Text>
              </TouchableOpacity>
            </View>
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
    position: "absolute", // Membuat posisi absolut
    top: 10, // Mengatur jarak dari atas layar
    left: 10, // Mengatur jarak dari sisi kiri
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1, // Menempatkan di atas elemen lainnya
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#002B5B",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 50, // Mengkompensasi posisi tombol kembali
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
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  pickerContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  timeLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  classLabel: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: "100%",
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
  ongoingButton: {
    backgroundColor: "#002B5B",
  },
  doneButton: {
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
