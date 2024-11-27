import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';

type ImageButtonProps = {
  source: string;
  onPress: () => void;
}

export default function ImageButton({ source, onPress }: ImageButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Image source={{ uri: source }} style={styles.image} resizeMode='contain' />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
  image: {
    height: 75,
    borderRadius: 10,
  },
});

