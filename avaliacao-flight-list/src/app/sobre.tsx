import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, Linking, Pressable } from 'react-native';
import HeaderMenu from '../components/HeaderMenu';
import Logo from '../components/login/Logo';

export default function Sobre() {
  const handleOpenGitHub = () => {
    Linking.openURL('https://github.com/matheusrc-dev');
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Stack.Screen options={{ title: "Sobre", headerRight: () => <HeaderMenu /> }} />
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/48885595?v=4' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Matheus</Text>
      <Text style={styles.description}>Desenvolvido por</Text>
      <Pressable onPress={handleOpenGitHub}>
        <Text style={styles.link}>github.com/matheusrc-dev</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#6c757d',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 5,
  },
  description: {
    fontSize: 18,
    color: '#6c757d',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});
