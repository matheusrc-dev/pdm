import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function Footer() {
  const footerTabs = [
    { icon: "like2", size: 24, color: "#000" },
    { icon: "shoppingcart", size: 24, color: "#000" },
    { icon: "camerao", size: 24, color: "#000" },
    { icon: "gift", size: 24, color: "#000" },
    { icon: "bells", size: 24, color: "#000" },
    { icon: "user", size: 24, color: "#000" },
  ] as const;

  return (
    <View style={styles.container}>
      {footerTabs.map((tab, index) => (
        <AntDesign key={index} name={tab.icon} size={tab.size} color={tab.color} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "gray",
    width: "100%",
    padding: 16,
  },
});
