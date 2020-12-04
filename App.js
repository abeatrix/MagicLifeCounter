import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import HomeScreen from './src/HomeScreen'

const U = require('./assets/U.png')
const B = require('./assets/B.png')
const W = require('./assets/W.png')
const R = require('./assets/R.png')
const G = require('./assets/G.png')

export default function App() {

  const random = Math.floor(Math.random()*5)
  const [start, setStart] = useState(false)
  const bgColor = ['blue', 'black', 'white', 'red', 'green']

  const randomMana = () => {
    const mono = [U, R, B, W, G];
    return mono[random]
  }

  return (
    <View style={StyleSheet.compose({backgroundColor: bgColor[random]}, styles.container)} >
      <SafeAreaView>
        <Image style={styles.pic} source={randomMana()}/>
      </SafeAreaView>
      { start ?
      <HomeScreen/> :
      <>
        <Text style={styles.header}>Life Counter</Text>
        <Text style={{fontSize: 15}}>Work like Magic!</Text>
        <View style={styles.btn}><Button title="Start Here" onPress={()=>setStart(true)} /></View>
      </>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  header: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  btn: {
    marginTop: 30,
    width: 250
  },
  pic: {
    height: 300,
    width: 300,
    marginBottom: 10
  }
});
