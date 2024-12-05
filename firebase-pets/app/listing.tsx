import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import HeaderMenu from "@/components/HeaderMenu";
import Pet from "@/types/Pet";
import useCollection from "@/firebase/hooks/useCollection";
import Loading from "@/components/Loading";

export default function Listing() {
  const router = useRouter();
  const { data, loading } = useCollection<Pet>("pets");

  if (loading) return <Loading />;

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Lista de Pets",
          headerRight: () => <HeaderMenu />,
        }}
      />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.petCard}
            onPress={() => router.push(`/details/${item.id}`)}
          >
            <Text style={styles.petName}>{item.name}</Text>
            <Text style={styles.petDetails}>
              {item.type} - {item.age} anos
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyList}>Nenhum pet cadastrado.</Text>
        }
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/create")}
      >
        <Text style={styles.addButtonText}>+ Adicionar Pet</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  petCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  petName: { fontSize: 18, fontWeight: "bold" },
  petDetails: { fontSize: 14, color: "#555" },
  emptyList: { textAlign: "center", color: "#aaa", marginTop: 20 },
  addButton: {
    backgroundColor: "#6200ee",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
