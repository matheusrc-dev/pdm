import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AppStateExample from "./src/components/AppStateExample";
import LifecycleDemo from "./src/components/LifecycleDemo";

export default function App() {
  const [childVisible, setChildVisible] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {childVisible && <LifecycleDemo />}

      <Button
        title="Toggle Child"
        onPress={() => setChildVisible(!childVisible)}
      />

      <AppStateExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
