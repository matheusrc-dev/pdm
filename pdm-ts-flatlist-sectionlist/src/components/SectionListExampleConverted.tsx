import { View, Text, FlatList, StyleSheet, SectionList } from "react-native";
import React from "react";

import data from "../services/MOCK_RAW_DATABASE.json";
import convertData from "../helpers/convertData";

export default function SectionListExampleConverted() {
  return (
    <View>
      <SectionList
        sections={convertData(data)}
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
