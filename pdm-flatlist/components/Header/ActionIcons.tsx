import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function ActionIcons() {
  return (
    <View style={styles.container}>
      <AntDesign name="shoppingcart" size={24} color="#000" />
      <AntDesign name="message1" size={24} color="#000" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  }
});