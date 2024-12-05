import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import { useRouter, useGlobalSearchParams, Stack } from "expo-router";
import HeaderMenu from "@/components/HeaderMenu";
import useDocument from "@/firebase/hooks/useDocument";
import Pet from "@/types/Pet";
import Loading from "@/components/Loading";
import PetForm from "@/components/PetForm";
import useCollection from "@/firebase/hooks/useCollection";

export default function Details() {
  const router = useRouter();
  const { id } = useGlobalSearchParams<{ id: string }>();
  const { data: pet, loading, upsert } = useDocument<Pet>("pets", id as string);
  const { remove } = useCollection<Pet>("pets");

  const handleUpdate = async (fields: Pet) => {
    try {
      await upsert(fields);
      if (router.canDismiss()) {
        router.dismissAll();
      }
      router.replace("/listing");
    } catch (error: any) {
      Alert.alert("Erro ao atualizar", error.toString());
    }
  };

  const handleRemove = async () => {
    try {
      await remove(id);
      if (router.canDismiss()) {
        router.dismissAll();
      }
      router.replace("/listing");
    } catch (error: any) {
      Alert.alert("Erro ao excluir", error.toString());
    }
  };

  if (loading || !pet) return <Loading />;

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Detalhes",
          headerRight: () => <HeaderMenu />,
        }}
      />

      <PetForm
        form={{
          name: pet.name,
          type: pet.type,
          age: pet.age,
        }}
        onSubmit={handleUpdate}
        onDelete={handleRemove}
        submitButtonText="Salvar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
});
