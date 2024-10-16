import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

export default function Footer() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{likes} Likes</Text>

      <Button
        title="Like"
        onPress={() => {
          setLikes(val => val + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
