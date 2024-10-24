import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function index() {
  return (
    <View>
      <Stack.Screen 
        options={{
          title: "Lista de Usuários"
        }}
      />
      <Text>Users:</Text>
      <Link
        href={{
          pathname: '/user/[id]',
          params: {
            id: '1',
            name: "João"
          }
        }}>
        Usuário 1
      </Link>
      <Link
        href={{
          pathname: '/user/[id]',
          params: {
            id: '2',
            name: "Pedro"
          }
        }}>
        Usuário 2
      </Link>
      <Link
        href={{
          pathname: '/user/[id]',
          params: {
            id: '3',
            name: "Marcos"
          }
        }}>
        Usuário 3
      </Link>
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