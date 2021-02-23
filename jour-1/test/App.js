import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { NativeRouter, NativeRouter as Router, Route } from 'react-router-native';


export default function App() {

  

  return (
    <NativeRouter>
    <View style={styles.container}>
      <ScrollView style={styles.container2}>
        <Text style={styles.firstText}>1er texte</Text>
        <Text style={styles.secondText}>2ème texte</Text>
        <Text style={styles.thirdText}>3ème texte</Text>
        <Image source={require("./images/konexio-logo_1.png")}
          style={styles.image} ></Image>
        <Image
          source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}
          style={styles.image} ></Image>
        < Pressable onPress={ () => {alert('HELLO WORLD')}
        } >
          < Text style={styles.button} > Je suis pressable ! </ Text >
        </ Pressable >
        <ActivityIndicator size="large"/>
      </ScrollView>

    </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: 700,
    padding: 32,
  },
  container2: {
    backgroundColor: 'white',
    padding: 32,

  },
  firstText: {
    fontSize: '30px ',
  },
  secondText: {
    textAlign: 'center ',
  },
  thirdText: {
    fontWeight: 'bold ',
  },
  image: {
    margin: 16,
    height: 50,
    width: 150,
  },
  button: {
   backgroundColor:'blue',
   width: 200,
   margin:32,
   padding:16,
   color:'white',
   fontSize: '30px ',
   textAlign: 'center ',
   borderRadius: 8
  },

});
