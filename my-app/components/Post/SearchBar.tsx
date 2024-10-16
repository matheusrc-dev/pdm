import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";

type SearchBarProps = {
  onSearch: (keywords: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [keywords, setKeywords] = useState("");

  return (
    <View style={styles.container}>
      <TextInput value={keywords} onChangeText={setKeywords} style={styles.input} />
      <Button title="Search" onPress={() => onSearch(keywords)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
    borderRadius: 4,
    padding: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    flex: 1
  }
});
