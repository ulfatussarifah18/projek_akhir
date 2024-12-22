import React, { useState } from "react";
import { View, Text, Picker, TouchableOpacity, StyleSheet, FlatList, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Untuk ikon tombol kembali
import { useNavigation } from "@react-navigation/native"; // Untuk navigasi

export default function ClassManagement() {
  const navigation = useNavigation(); // Menggunakan navigasi untuk kembali

  // State untuk menyimpan daftar kelas
  const [classes, setClasses] = useState([
    { id: "1", className: "10-A" },
    { id: "2", className: "10-B" },
    { id: "3", className: "11-A" },
    { id: "4", className: "11-B" },
    { id: "5", className: "12-A" },
  ]);

  // State untuk memilih kelas yang aktif
  const [selectedClass, setSelectedClass] = useState("10-A");
  const [newClassName, setNewClassName] = useState(""); // Nama kelas baru

  // Fungsi untuk menambah kelas
  const addClass = () => {
    if (newClassName) {
      const newClass = { id: (classes.length + 1).toString(), className: newClassName };
      setClasses((prevClasses) => [...prevClasses, newClass]);
      setNewClassName(""); // Reset input nama kelas baru
    }
  };

  // Fungsi untuk menghapus kelas
  const deleteClass = (classId) => {
    setClasses((prevClasses) => prevClasses.filter((item) => item.id !== classId));
  };

  return (
    <View style={styles.container}>
      {/* Tombol Kembali di Sudut Kiri Atas */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#333" />
      </TouchableOpacity>

      {/* Judul Halaman */}
      <Text style={styles.headerText}>Manajemen Kelas</Text>

      {/* Pilihan kelas */}
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Pilih Kelas:</Text>
        <Picker selectedValue={selectedClass} style={styles.picker} onValueChange={(itemValue) => setSelectedClass(itemValue)}>
          {classes.map((item) => (
            <Picker.Item key={item.id} label={item.className} value={item.className} />
          ))}
        </Picker>
      </View>

      {/* Menambahkan kelas baru */}
      <TextInput style={styles.input} value={newClassName} onChangeText={setNewClassName} placeholder="Masukkan nama kelas baru" />
      <TouchableOpacity style={styles.button} onPress={addClass}>
        <Text style={styles.buttonText}>Tambah Kelas</Text>
      </TouchableOpacity>

      {/* Daftar Kelas */}
      <FlatList
        data={classes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.classItem}>
            <Text style={styles.className}>{item.className}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteClass(item.id)}>
              <Text style={styles.deleteButtonText}>Hapus</Text>
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
    backgroundColor: "#fff",
    padding: 20,
  },
  backButton: {
    position: "absolute", // Tombol tetap di posisi atas
    top: 10, // Jarak dari atas layar
    left: 10, // Jarak dari kiri layar
    zIndex: 1, // Menempatkan tombol di atas semua elemen lainnya
    padding: 10, // Ruang tambahan untuk mempermudah klik
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginTop: 60, // Memberi ruang di bawah tombol kembali
    marginBottom: 20,
  },
  pickerContainer: {
    marginBottom: 20,
  },
  pickerLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#002B5B",
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  classItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f7f7f8",
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  className: {
    fontSize: 18,
    color: "#333",
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    padding: 8,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
  },
});
