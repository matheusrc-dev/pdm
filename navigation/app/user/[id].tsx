import { router, Stack, useGlobalSearchParams } from 'expo-router'
import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function id() {
  const { id, name } = useGlobalSearchParams();

  const goBackToUsers = () => {
    router.push("/user");
  }

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: `${name}`
        }}
      />
      <Text>Olá {name} seu user id é: {id}</Text>
      <Button title='Voltar' onPress={goBackToUsers}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})