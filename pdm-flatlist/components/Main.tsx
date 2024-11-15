import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import products from "../services/products.json";
import ProductCard from "./ProductCard";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <Text style={styles.infoText}>DESCOBERTAS DO DIA</Text>
      </View>

      <FlatList 
        data={products}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={styles.productList}
        renderItem={({ item, index }) => (
          <ProductCard name={item.name} price={item.price} key={index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  infoText: {
    fontSize: 24,
  },

  infoWrapper: {
    backgroundColor: "gray",
    marginVertical: 16,
    padding: 8
  },

  productList: {
    margin: 8,
    gap: 12
  }
});
