import React from "react";
import Feather from '@expo/vector-icons/Feather';
import { useActionSheet } from "@expo/react-native-action-sheet";
import { TouchableOpacity, StyleSheet } from "react-native";
import { router, usePathname } from "expo-router";

export default function HeaderMenu() {
  const { showActionSheetWithOptions } = useActionSheet();
  const pathname = usePathname();


  const onPress = () => {
    const options = ["Sobre", "Logout", "Cancelar"];
    if (pathname === "/sobre") {
      options.splice(0, 1);
    }
    const aboutButtonIndex = options.findIndex(option => option == "Sobre")
    const destructiveButtonIndex = options.findIndex(option => option == "Logout");
    const cancelButtonIndex = options.findIndex(option => option == "Cancelar");

    showActionSheetWithOptions({
      options,
      cancelButtonIndex,
      destructiveButtonIndex,
    },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case aboutButtonIndex:
            router.push("/sobre");
            break;

          case destructiveButtonIndex:
            router.replace("/");
            break;

          case cancelButtonIndex:
        }
      }
    );
  };

  return (
    <TouchableOpacity onPressIn={onPress} style={styles.menuButton}>
      <Feather name="menu" size={24} color="#017aff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    marginRight: 6,
  },
});
