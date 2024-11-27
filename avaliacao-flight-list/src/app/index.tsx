import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useRouter, useNavigation } from 'expo-router';
import ImageButton from '../components/login/ImageButton';
import Logo from '../components/login/Logo';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const handleLogin = () => {
    if (usuario === 'fulano' && senha === '123') {
      router.replace('/listagem');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <Logo />

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <ImageButton
        label='Entrar'
        source="https://drive.google.com/u/1/drive-viewer/AKGpihaSZbaYnxTTu8vKrVzySvliG5drwI1LI7dYnYQDebVxB0udBGgymMnvd-cVd060JbziR-ZI0PHsPHfgLzr0_o84UFhloLxLyA=s1600-rw-v1"
        onPress={() => handleLogin()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    fontSize: 16,
  }
});

