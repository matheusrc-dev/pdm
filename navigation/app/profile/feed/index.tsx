import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Stack, useRouter } from "expo-router";

const posts = [
  {
    id: "1",
    title: "Iniciando na Programação",
    content: "Primeiros passos na programação entenda aqui",
  },
  {
    id: "2",
    title: "O que é Front end?",
    content: "Nesse post você vai entender o que é o Front end.",
  },
  {
    id: "3",
    title: "O que é Back end?",
    content: "Nesse post você vai entender o que é Back end.",
  },
];

export default function Feed() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Listagem de Posts",
        }}
      />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.post}
            onPress={() =>
              router.push({
                pathname: `/profile/feed/${item.id}`,
                params: {
                  title: item.title,
                  content: item.content,
                },
              })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.content}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  post: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
