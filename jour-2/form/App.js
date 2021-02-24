import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Pressable } from 'react-native';

export default function App() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  
  console.log(mail)




  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Mail"
        style={{ width: 200, borderColor: 'gray', borderWidth: 2, margin: 8, padding: 8 }}
        value={mail}
        onChangeText={setMail}

      />
      <TextInput
      
        placeholder="Password"
        style={{ width: 200, borderColor: 'gray', borderWidth: 2, margin: 8, padding: 8 }}
        value={password}
        onChangeText={setPassword}
      />
      <Pressable
        style={{ margin: 8, padding: 8, }}
        onPress={() => { password.length < 6 ? alert('trop court') : alert('ok') }}
      >

        <Text style={styles.button} >Envoyer</Text>

      </Pressable>
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
  button: {
    backgroundColor: 'black',
    width: 200,
    margin: 32,
    padding: 16,
    color: 'white'


  },

});
