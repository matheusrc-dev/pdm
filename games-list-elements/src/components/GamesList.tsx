import { View, Text, SectionList, StyleSheet, StatusBar } from 'react-native'
import React from 'react';
import games from '../services/games';

export default function GamesList() {
  return (
    <View>
      <SectionList
        sections={games}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>Game: {item.title}</Text>          
            <Text>Platform: {item.platform}</Text>          
            <Text>Metacritic: {item.metacritic}</Text>          
          </View>
        )}

        renderSectionHeader={({section: { category }}) => (
          <Text style={styles.header}>{category}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  listItem: {
    padding: 8,
    marginVertical: 8,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8
  }
});