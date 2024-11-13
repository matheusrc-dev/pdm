import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import data from "../services/MOCK_DATA.json";

export default function FlatListExample() {
  return (
    <View>
      {/* Forma manual de desenhar a coleção */}
      {/* {data.map((d) => (
        <Text key={d.id}>{d.id}</Text>
      ))} */}

      {/* Forma automática com FlatList */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.id}</Text>
            <Text>{item.currency}</Text>
            <Text>{item.card}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 16,
  },
});
