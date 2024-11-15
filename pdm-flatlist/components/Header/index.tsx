import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from './SearchBar';
import ActionIcons from './ActionIcons';

export default function Header() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ActionIcons />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    width: "100%",
    padding: 8,
    gap: 8
  }
});