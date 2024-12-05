import { Stack } from "expo-router";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

export default function Layout() {
  return (
    <ActionSheetProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#6200ee" },
          headerTintColor: "#fff",
        }}
      />
    </ActionSheetProvider>
  );
}
