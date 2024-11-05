import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Badge from "../checkout/Badge";

export default function CardHeader({ title }: { title: string }) {
  return (
    <View style={styles.cardHeader}>
      <Badge text="Indicado" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    gap: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
