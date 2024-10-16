import { View, Text, StyleSheet } from "react-native";
import React from "react";

type CarProps = {
  car: {
    car: string;
    brand: string;
    HP: number;
  };
};

export default function Car({ car }: CarProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carro: {car.car}</Text>
      <Text style={styles.info}>Marca: {car.brand}</Text>
      <Text style={styles.info}>Cavalos: {car.HP}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginVertical: 16,
    backgroundColor: "#57a0c2",
  },
  title: {
    fontSize: 24,
    marginBottom: 6,
    color: "#f2f2f2",
  },

  info: {
    color: "white",
  },
});
