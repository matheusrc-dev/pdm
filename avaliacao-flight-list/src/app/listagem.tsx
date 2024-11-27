import React, { useState } from 'react';
import { SectionList, View, StyleSheet } from 'react-native';
import { groupPassengersByCountry } from '../helpers';
import { Stack } from 'expo-router';
import dataPassengers from '../services/data-passengers';
import HeaderMenu from '../components/HeaderMenu';
import PassengerItem from '../components/listagem/PassengerItem';
import SectionHeader from '../components/listagem/SectionHeader';
import Logo from '../components/login/Logo';

export default function ListScreen() {
  const [groupedDataWithExpanded, setGroupedDataWithExpanded] = useState(() => {
    return groupPassengersByCountry(dataPassengers);
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

  return (
    <View style={styles.container}>
      <Logo />
      <Stack.Screen options={{ title: "Listagem", headerBackVisible: false, headerRight: () => <HeaderMenu /> }} />
      <SectionList
        sections={groupedDataWithExpanded}
        initialNumToRender={20}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ section, item }) => {
          if (!section.isExpanded) return null;

          return <PassengerItem passenger={item} />
        }}
        renderSectionHeader={({ section }) => (
          <SectionHeader
            title={section.title}
            isExpanded={section.isExpanded}
            onToggle={() => handleToggle(section.title)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 10,
    paddingHorizontal: 20,
  }
});
