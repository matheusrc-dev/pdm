import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Footer from "./Footer";

type PostProps = {
  author: string;
  photo?: string;
};

export default function Post({ author, photo = "gray" }: PostProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{author}</Text>
      <View style={[styles.photo, { backgroundColor: photo }]} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    backgroundColor: "lightgray",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    padding: 4,
  },

  photo: {
    height: 150,
    backgroundColor: "lime",
  },
});
