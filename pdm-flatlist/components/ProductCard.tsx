import { View, Text, StyleSheet } from "react-native";
import React from "react";

type ProductCardProps = {
  name: string;
  price: number;
};

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardImage} />
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 8,
    flex: 1,
    backgroundColor: "lightgray",
  },

  cardImage: {
    height: 200,
    backgroundColor: "gray"
  }
});
