import React from 'react';
import { Pressable, ImageBackground, Text, StyleSheet } from 'react-native';

type ImageButtonProps = {
  source: string;
  onPress: () => void;
  label: string;
};

export default function ImageButton({ source, onPress, label }: ImageButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <ImageBackground source={{ uri: source }} style={styles.image} imageStyle={styles.imageStyle}>
        <Text style={styles.label}>{label}</Text>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    width: '100%',
  },
  image: {
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageStyle: {
    borderRadius: 10,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
