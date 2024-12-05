import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import HeaderMenu from "@/components/HeaderMenu";
import useCollection from "@/firebase/hooks/useCollection";
import Pet from "@/types/Pet";
import PetForm from "@/components/PetForm";

export default function CreatePet() {
  const router = useRouter();
  const { create } = useCollection<Pet>("pets");

  const handleSave = async (fields: Pet) => {
    try {
      await create(fields);
      if (router.canDismiss()) {
        router.dismissAll();
      }
      router.replace("/listing");
    } catch (error: any) {
      Alert.alert("Erro ao cadastrar", error.toString());
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Adicione seu Pet",
          headerBackTitle: "Voltar",
          headerRight: () => <HeaderMenu />,
        }}
      />
      <PetForm
        form={{
          name: "",
          type: "",
          age: 0,
        }}
        onSubmit={handleSave}
        submitButtonText="Criar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
});
