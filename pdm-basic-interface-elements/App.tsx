import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import FormInput from "./components/FormInput";
import { useState } from "react";
import Newsletter from "./components/Newsletter";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("./assets/images/pdmgram.png")}
      />
      <Text style={styles.signUp}>Sign Up</Text>
      <FormInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <FormInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Password"
      />
      <Newsletter value={isEnabled} onValueChange={toggleSwitch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  logo: {
    width: 250,
    height: 70,
  },

  signUp: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 32,
  },
});
