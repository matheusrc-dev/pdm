import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function HeaderRight() {
  return (
    <View style={styles.container}>
      <Text style={styles.actionText}>Editar</Text>
      <AntDesign name="message1" size={24} color="#ec4c2b" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 16
  },
  actionText: {
    fontSize: 16
  }
})