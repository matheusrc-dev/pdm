import { View, Text, StyleSheet } from "react-native";
import React from "react";

type PriceTagProps = {
  price: number;
  priceBeforeDiscount?: number;
};

export default function PriceTag({ price, priceBeforeDiscount }: PriceTagProps) {
  return (
    <View style={styles.priceWrapper}>
      <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
      {
        priceBeforeDiscount &&
        <Text style={styles.priceBeforeDiscount}> R$ {priceBeforeDiscount.toFixed(2)} </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  priceWrapper: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ec4c2b",
  },
  priceBeforeDiscount: {
    color: "#c1c1c1",
    textDecorationLine: "line-through",
    fontSize: 10
  }
});
