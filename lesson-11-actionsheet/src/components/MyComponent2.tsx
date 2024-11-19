import { useActionSheet } from "@expo/react-native-action-sheet";
import { View, Text, Button } from "react-native";
import React from "react";

export default function MyComponent2() {
  const { showActionSheetWithOptions } = useActionSheet();

  const handlePress = (id: string) => {
    showActionSheetWithOptions(
      {
        options: [id, "Dismiss", "Cancel"],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 2,
      },
      (pressedId) => {
        switch (pressedId) {
          case 0:
            console.log("Selected (SHARE " + id + "): ", pressedId);
            break;
          case 1:
            console.log("Selected (DISMISS): ", pressedId);
            break;
        }
      }
    );
  };

  return (
    <View>
      <Text>Item 1</Text>
      <Button title="Bt1" onPress={() => handlePress("Share 1")} />
      <Text>Item 2</Text>
      <Button title="Bt2" onPress={() => handlePress("Share 2")} />
      <Text>Item 3</Text>
      <Button title="Bt3" onPress={() => handlePress("Share 3")} />
    </View>
  );
}
