import {
  ActionSheetProvider,
  connectActionSheet,
} from "@expo/react-native-action-sheet";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MyComponent from "./src/components/MyComponent";
import MyComponent2 from "./src/components/MyComponent2";
import Aula from "./src/components/Aula";

function App() {
  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        {/* <MyComponent /> */}
        {/* <MyComponent2 /> */}
        <Aula />
        <StatusBar style="auto" />
      </View>
    </ActionSheetProvider>
  );
}

const ConnectedApp = connectActionSheet(App);

export default ConnectedApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
