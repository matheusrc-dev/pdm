import { View, Text, StyleSheet } from "react-native";
import React from "react";

type HeaderLeftProps = {
  title: string;
  itemsInCart?: number
};

export default function HeaderLeft({ title, itemsInCart }: HeaderLeftProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.itemsInCart}>({itemsInCart})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  itemsInCart: {
    marginTop: 4,
  },
});
