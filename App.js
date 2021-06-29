import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)

  function mais() {
    setCount(count + 1)
  }
  function menos() {
    setCount(count - 1)
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt1}>Contador de Pessoas</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.txt2}>{count}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.btn1} onPress={mais}>
          <Text style={styles.btn2}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.btn1} onPress={menos}>
          <Text style={styles.btn2}>-</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#636aba',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    margin: 25,
    marginTop: -30,
  },
  box: {
    width: 190,
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
    borderRadius: 15,
  },
  txt2: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn1: {
    width: 210,
    height: 85,
    backgroundColor: '#362861',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 25,
    borderRadius: 10,
  },
  btn2: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});