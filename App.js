import { StyleSheet, View, Text } from 'react-native';
import Quadrado from './components/Quadrado';

export default function App() {
  return (
    <View style={styles.container}>
      
        <View style={styles.cabecalho}>

        <Quadrado cor="green" lado={50}/>
        <Quadrado cor="blue" lado={50}/>
        <Quadrado cor="pink" lado={50}/>
        <Quadrado cor="#0f684b" lado={50}/>
        <Quadrado cor="#8ac7de" lado={50}/>
        
        </View>

        <View style={styles.principal}>

        <Quadrado cor="green" lado={20}/>
        <Quadrado cor="blue" lado={40}/>
        <Quadrado cor="pink" lado={60}/>
        <Quadrado cor="#0f684b" lado={80}/>
        <Quadrado cor="#8ac7de" lado={100}/>
        
        </View>

        <View style={styles.rodape}>

        <Quadrado cor="green" lado={20}/>
        <Quadrado cor="blue" lado={40}/>
        <Quadrado cor="pink" lado={60}/>
        <Quadrado cor="#0f684b" lado={80}/>
        <Quadrado cor="#8ac7de" lado={100}/>
        
        </View>


       
     </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
  },
  cabecalho:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: '#24c0eb'
  },
  principal:{
    flex:4,
    justifyContent: 'center',
    alignItems:'center',
    width: '100%',
    backgroundColor: '#b9cc01'
  },
  rodape:{
    flex:1,
    width: '100%',
    backgroundColor: '#ff1d44'
  }
}); 
