import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FlatListExample from "./src/components/FlatListExample";
import SectionListExample from "./src/components/SectionListExample";
import SectionListExampleConverted from "./src/components/SectionListExampleConverted";

export default function App() {
  console.log("Check App.tsx for FlatList and SectionList Examples");

  return (
    <View style={styles.container}>
      {/* <FlatListExample /> */}

      <SectionListExample />

      {/* <SectionListExampleConverted /> */}
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
