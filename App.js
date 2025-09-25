import { StyleSheet, View } from 'react-native';
import Quadrado from './components/Quadrado';

export default function App() {
  return (
    <View style={styles.container}>
      <Quadrado cor="green"/>
      <Quadrado cor="blue"/>
      <Quadrado cor="pink"/>
      <Quadrado cor="#0f684b"/>
      <Quadrado cor="#8ac7de"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
