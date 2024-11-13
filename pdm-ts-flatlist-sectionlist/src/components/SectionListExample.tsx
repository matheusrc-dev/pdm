import { View, Text, FlatList, StyleSheet, SectionList } from "react-native";
import React from "react";

import data from "../services/MOCK_DATA_SECTION.json";

export default function SectionListExample() {
  return (
    <View>
      <SectionList
        sections={data}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 16,
    fontWeight: "bold",
  },
});
