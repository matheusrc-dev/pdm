import { View, StyleSheet } from "react-native";
import React from "react";
import {
  DEFAULT_GAP,
  DEFAULT_PADDING,
  DEFAULT_RADIUS,
} from "@/constants/globalStyles";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

type CardProps = {
  title: string;
  imageURL: string;
  productName: string;
  price: number;
  priceBeforeDiscount?: number;
};

export default function Card({
  title,
  imageURL,
  productName,
  price,
  priceBeforeDiscount,
}: CardProps) {
  return (
    <View style={styles.container}>
      <CardHeader title={title} />
      <CardBody
        imageURL={imageURL}
        productName={productName}
        price={price}
        priceBeforeDiscount={priceBeforeDiscount}
      />
      <View style={styles.divider} />
      <CardFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: DEFAULT_RADIUS,
    padding: DEFAULT_PADDING,
    width: "100%",
    gap: DEFAULT_GAP,
  },
  divider: {
    borderTopWidth: 1,
    borderTopColor: "#f1f1f1",
    marginHorizontal: -DEFAULT_PADDING,
  },
});
