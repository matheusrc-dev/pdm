import React from "react";
import Feather from '@expo/vector-icons/Feather';
import { useActionSheet } from "@expo/react-native-action-sheet";
import { TouchableOpacity, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
import useAuth from "@/firebase/hooks/useAuth";

export default function HeaderMenu() {
  const { logout } = useAuth();
  const { showActionSheetWithOptions } = useActionSheet();

  const handleLogout = async () => {
    try {
      await logout();
      if (router.canDismiss()) {
        router.dismissAll();
      }
      router.replace("/");
    } catch (error: any) {
      Alert.alert("Logout error", error.toString());
    }
  }

  const onPress = () => {
    const options = ["Logout", "Cancel"];

    showActionSheetWithOptions({
      options,
      destructiveButtonIndex: 0,
      cancelButtonIndex: 1
    },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 0:
            handleLogout();
            break;
        }
      }
    );
  };

  return (
    <TouchableOpacity onPressIn={onPress} style={styles.menuButton}>
      <Feather name="menu" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuButton: {
    marginRight: 6,
  },
});