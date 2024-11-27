import React, { useState } from 'react';
import { SectionList, Text, View, StyleSheet, TouchableOpacity, Alert, Image, Pressable } from 'react-native';
import data from '../services/data-passengers';
import { Stack } from 'expo-router';
import Menu from '../components/Menu';

type Passenger = {
  id: number;
  passenger_name: string;
  passenger_avatar: string;
  origin: string;
  destination: string;
};

const groupByCountry = (data: Passenger[]) => {
  const grouped: { [key: string]: Passenger[] } = {};

  data.forEach(passenger => {
    const countries = [passenger.origin, passenger.destination];

    countries.forEach(country => {
      if (!grouped[country]) {
        grouped[country] = [];
      }
      grouped[country].push(passenger);
    });
  });

  return grouped;
};

export default function ListScreen() {
  const [groupedDataWithExpanded, setGroupedDataWithExpanded] = useState(() => {
    const groupedData = groupByCountry(data);
    return Object.keys(groupedData).map((key) => ({
      title: `${key} (${groupedData[key].length})`,
      data: groupedData[key],
      isExpanded: false,
    }));
  });

  const handleToggle = (title: string) => {
    setGroupedDataWithExpanded((prev) =>
      prev.map((section) =>
        section.title === title
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    );
  };

  const handlePassengerPress = (passenger: Passenger) => {
    Alert.alert(
      'Passageiro',
      `Nome: ${passenger.passenger_name}\nOrigem: ${passenger.origin}\nDestino: ${passenger.destination}`
    );
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Listagem", headerRight: () => <Menu /> }}/>
      <SectionList
        sections={groupedDataWithExpanded}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ section, item }) => {
          if (!section.isExpanded) return null;

          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handlePassengerPress(item)}
            >
              <Image
                source={{ uri: item.passenger_avatar }}
                style={styles.avatar}
              />
              <Text style={styles.itemText}>{item.passenger_name}</Text>
            </TouchableOpacity>
          );
        }}
        renderSectionHeader={({ section }) => (
          <Pressable onPress={() => handleToggle(section.title)}>
            <Text style={styles.header}>{section.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#dbe3e7',
    paddingVertical: 10,
    paddingLeft: 15,
    marginBottom: 5,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
