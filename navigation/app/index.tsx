import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: "Home"
        }}
      />
      <Text>Navegação com Expo Router!</Text>
      <Link href="/login">Fazer login</Link>
      <Link href="/user">Usuários</Link>
      <Link href="/profile">Meu Perfil</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
