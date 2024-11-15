import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32
  }
});
