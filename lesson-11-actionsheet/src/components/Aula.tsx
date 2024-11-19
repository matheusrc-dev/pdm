import { View, Text, Button } from "react-native";
import React from "react";
import { useActionSheet } from "@expo/react-native-action-sheet";

export default function Aula() {
  const { showActionSheetWithOptions } = useActionSheet();

  const handlePress = () => {
    showActionSheetWithOptions(
      {
        options: ["Deletar", "Editar", "Salvar", "Compartilhar", "Cancelar"],
        cancelButtonIndex: 4,
        cancelButtonTintColor: "#ff0000",
        destructiveButtonIndex: 0,
      },
      (i: number) => {
        switch (i) {
          case 0:
            console.log("Deletou!");
            break;

          case 1:
          console.log("Editou!");
            break;

          case 2:
          console.log("Salvou!");
            break;
        
          default:
            break;
        }
      }
    );
  };

  return (
    <View>
      <Text>Aula</Text>

      <Button title="Abrir ActionSheet" onPress={handlePress} />
    </View>
  );
}
