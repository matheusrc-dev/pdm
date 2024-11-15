import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="#000" />
      <TextInput style={styles.searchBar} placeholder='Buscar na Shopee' />
      <AntDesign name="camerao" size={24} color="#000" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "lightgray",
    paddingHorizontal: 8
  },

  searchBar: {
    flexGrow: 1
  }
});