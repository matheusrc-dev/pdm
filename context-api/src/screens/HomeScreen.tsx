import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { Card } from '../components/Card';
import { Header } from '../components/Header';

export function HomeScreen() {
  const { colors } = useTheme();

  const showAppInfo = () => {
    Alert.alert(
      'Sobre o App',
      'Aplicação de demonstração que utiliza Context API para gerenciar temas.',
      [{ text: 'OK', style: 'default' }]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.backgroundColor }]}>
      <Header />
      <View style={styles.content}>
        <Card 
          title="Bem vindo!"
          content="Clique no botão no cabeçalho para alternar entre os temas claro e escuro."
        />
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: colors.primaryButtonColor }]}
          onPress={showAppInfo}
        >
          <Text style={styles.buttonText}>Sobre o App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 16,
  },
  button: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
