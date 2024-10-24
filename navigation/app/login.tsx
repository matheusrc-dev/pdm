import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function login() {
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: "Fazer login"
        }}
      />
      <Text>Você está no login!</Text>
      <Link href="/">Voltar para a Home</Link>
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