import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { router } from "expo-router";

export default function Menu() {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ["Sobre", "Logout", "Cancelar"];
    const destructiveButtonIndex = 1;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 0:
            router.push("/About");
            break;

          case destructiveButtonIndex:
            router.dismissAll();
            break;

          case cancelButtonIndex:
        }
      }
    );
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.menuButton}>
      <MaterialIcons name="menu" size={24} color="#0022EE" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    marginRight: 10,
  },
});