import { View, Text, StyleSheet } from "react-native";
import { Stack, useGlobalSearchParams } from "expo-router";

export default function PostDetail() {
  const { title, content } = useGlobalSearchParams<{
    title: string;
    content: string;
  }>();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: `${title}`,
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
