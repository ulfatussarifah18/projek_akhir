import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function JadwalMingguanScreen() {
  const navigation = useNavigation();

  // Data jadwal mingguan
  const jadwalMingguan = {
    Senin: [
      { id: "1", time: "07:00 - 08:30", subject: "Matematika" },
      { id: "2", time: "08:45 - 10:15", subject: "Bahasa Indonesia" },
      { id: "break", time: "10:15 - 10:30", subject: "Istirahat" },
      { id: "3", time: "10:30 - 12:00", subject: "Fisika" },
      { id: "4", time: "13:00 - 14:30", subject: "Sejarah" },
    ],
    Selasa: [
      { id: "1", time: "07:00 - 08:30", subject: "Kimia" },
      { id: "2", time: "08:45 - 10:15", subject: "Bahasa Inggris" },
      { id: "break", time: "10:15 - 10:30", subject: "Istirahat" },
      { id: "3", time: "10:30 - 12:00", subject: "Biologi" },
      { id: "4", time: "13:00 - 14:30", subject: "Geografi" },
    ],
    Rabu: [
      { id: "1", time: "07:00 - 08:30", subject: "Matematika" },
      { id: "2", time: "08:45 - 10:15", subject: "Pendidikan Agama" },
      { id: "break", time: "10:15 - 10:30", subject: "Istirahat" },
      { id: "3", time: "10:30 - 12:00", subject: "Ekonomi" },
      { id: "4", time: "13:00 - 14:30", subject: "Seni Budaya" },
    ],
    Kamis: [
      { id: "1", time: "07:00 - 08:30", subject: "Fisika" },
      { id: "2", time: "08:45 - 10:15", subject: "Bahasa Indonesia" },
      { id: "break", time: "10:15 - 10:30", subject: "Istirahat" },
      { id: "3", time: "10:30 - 12:00", subject: "Sejarah" },
      { id: "4", time: "13:00 - 14:30", subject: "Pendidikan Kewarganegaraan" },
    ],
    Jumat: [
      { id: "1", time: "07:00 - 08:30", subject: "Olahraga" },
      { id: "2", time: "08:45 - 10:15", subject: "Bahasa Inggris" },
      { id: "break", time: "10:15 - 10:30", subject: "Istirahat" },
      { id: "3", time: "10:30 - 11:30", subject: "Biologi" },
    ],
    Sabtu: [
      { id: "1", time: "07:00 - 08:30", subject: "Prakarya" },
      { id: "2", time: "08:45 - 10:15", subject: "Matematika" },
      { id: "break", time: "10:15 - 10:30", subject: "Istirahat" },
      { id: "3", time: "10:30 - 12:00", subject: "Sosiologi" },
      { id: "4", time: "13:00 - 14:30", subject: "Ekonomi" },
    ],
  };

  const [selectedDay, setSelectedDay] = useState("Senin"); // Hari yang dipilih

  return (
    <View style={styles.container}>
      {/* Tombol Kembali */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="#002B5B" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Jadwal Mingguan</Text>

      {/* Pilihan Hari */}
      <View style={styles.daySelector}>
        {Object.keys(jadwalMingguan).map((day) => (
          <TouchableOpacity key={day} style={[styles.dayButton, selectedDay === day && styles.dayButtonSelected]} onPress={() => setSelectedDay(day)}>
            <Text style={[styles.dayButtonText, selectedDay === day && styles.dayButtonTextSelected]}>{day}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Jadwal untuk Hari yang Dipilih */}
      <FlatList
        data={jadwalMingguan[selectedDay]}
        keyExtractor={(item, index) => `${selectedDay}-${index}`}
        renderItem={({ item }) => (
          <View style={[styles.card, item.subject === "Istirahat" && styles.breakCard]}>
            <Text style={styles.timeText}>{item.time}</Text>
            <Text style={styles.subjectText}>{item.subject}</Text>
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
    marginBottom: 10,
    marginLeft: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#002B5B",
    marginBottom: 10,
    textAlign: "center",
  },
  daySelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  dayButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  dayButtonSelected: {
    backgroundColor: "#002B5B",
  },
  dayButtonText: {
    fontSize: 16,
    color: "#555",
  },
  dayButtonTextSelected: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
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
  breakCard: {
    backgroundColor: "#FFE4B5",
  },
  timeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subjectText: {
    fontSize: 14,
    color: "#555",
  },
});
