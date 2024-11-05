import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { FontAwesome5 } from "@expo/vector-icons";
import PriceTag from "../checkout/PriceTag";

type CardBodyProps = {
  imageURL: string;
  productName: string;
  price: number;
  priceBeforeDiscount?: number;
};

export default function CardBody({
  imageURL,
  productName,
  price,
  priceBeforeDiscount,
}: CardBodyProps) {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.cardBody}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color="#ec4c2b"
      />
      <Image
        style={styles.productImage}
        source={{ uri: imageURL }}
        resizeMode="contain"
      />
      <View style={styles.productInfo}>
        <View>
          <Text numberOfLines={1}>{productName}</Text>
          <Text style={styles.freeShippingBadge}>
            <Text style={styles.iconBadge}>
              <FontAwesome5 name="plane" size={12} color="#fff" />
            </Text>
            <Text>FRETE GRÁTIS Acima de R$19</Text>
          </Text>
        </View>
        <PriceTag price={price} priceBeforeDiscount={priceBeforeDiscount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBody: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkbox: {
    margin: 8,
  },
  productImage: {
    width: 100,
    height: 100,
    borderColor: "#f1f1f1",
    borderWidth: 1,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    justifyContent: "space-between",
    height: 100,
  },
  freeShippingBadge: {
    backgroundColor: "#143666",
    color: "#fff",
    fontSize: 12,
  },
  iconBadge: {
    backgroundColor: "#448d7c",
  },
});
