import { Text, StyleSheet, ScrollView, View } from "react-native";
import React, { useState } from "react";
import Post from "./Post/Post";
import Car from "./Post/Car";
import SearchBar from "./Post/SearchBar";

export default function Feed() {
  const [carsToSearch, setCarsToSearch] = useState("");

  const cars = [
    {
      id: 1,
      car: "Fusca",
      brand: "VW",
      HP: 100,
    },
    {
      id: 2,
      car: "Onix",
      brand: "Chevrovlet",
      HP: 200,
    },
    {
      id: 3,
      car: "Sandero",
      brand: "Renault",
      HP: 300,
    },
    {
      id: 4,
      car: "Uno",
      brand: "Fiat",
      HP: 400,
    },
  ];

  const handleSearch = (keywords: string) => {
    console.log("Procurando por: ", keywords);
    setCarsToSearch(keywords);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Feed</Text>
        <SearchBar onSearch={handleSearch} />
        {cars.map((car) => {
          if (
            carsToSearch === "" ||
            car.car.toLowerCase().includes(carsToSearch.toLowerCase())
          ) {
            return <Car key={car.id} car={car} />;
          }
        })}
        <Post author="João" photo="purple" />
        <Post author="Maria" photo="orange" />
        <Post author="Pedro" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },

  container: {
    marginTop: 64,
  },
});
