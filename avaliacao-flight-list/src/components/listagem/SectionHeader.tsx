import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

type SectionHeaderProps = {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
};

export default function SectionHeader({ title, isExpanded, onToggle }: SectionHeaderProps) {
  return (
    <Pressable onPress={onToggle} style={styles.header}>
      <View style={styles.content}>
        <Text style={styles.headerText}>{title}</Text>
        <Feather
          name={isExpanded ? 'chevron-down' : 'chevron-right'}
          size={20}
          color="#333"
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#dbe3e7',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 5,
    borderRadius: 5,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});
