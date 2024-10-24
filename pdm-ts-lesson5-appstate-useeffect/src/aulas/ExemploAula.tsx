import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function ExemploAula() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("First render!!!")

    return () => {
      console.log("Last render...")
    }
  }, []);

  return (
    <View>
      <Text>ExemploAula</Text>
      <TextInput
        style={styles.input}
        value={userName}
        onChangeText={setUserName}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },
});