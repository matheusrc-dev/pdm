import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { DEAFULT_RADIUS, DEFAULT_PADDING } from "../../constants/globalStyles";

type PriceTagProps = {
  price: number;
};

export default function PriceTag({ price }: PriceTagProps) {
  return (
    <Text style={styles.price}>R$ {price}</Text>
  );
}

const styles = StyleSheet.create({
  price: {
    fontWeight: "bold",
    fontSize: 20,
    color: "green",
    textAlign: "right"
  }
});
