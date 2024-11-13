import { StyleSheet, Text, View, StatusBar } from 'react-native';
import GamesList from './src/components/GamesList';

export default function App() {
  return (
    <View style={styles.container}>
      <GamesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16    
  },
});
