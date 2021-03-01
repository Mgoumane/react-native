import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Pressable } from 'react-native';


export default function Login(props) {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [emailInput, setEmailInput] = useState(styles.inputInvalid)
  const [passwordInput, setpasswordInput] = useState(styles.inputInvalid)

  const validInputEmail = (text) => {
    if (text.length >= 6) {
      setEmailInput(styles.inputValid)
    } else {
      setEmailInput(styles.inputInvalid)
    }
  }
  const validInputPassword = (text) => {
    if (text.length >= 6) {
      setpasswordInput(styles.inputValid)
    } else {
      setpasswordInput(styles.inputInvalid)
    }
  }



  return (
    <View style={styles.container}>
     
      <TextInput
        placeholder="Mail"
        keyboardType="email-address"
        style={emailInput}
        onChangeText={(email) => {validInputEmail(email)}}

      />
      <TextInput

        placeholder="Password"
        style={passwordInput}
        onChangeText={(password) => {validInputPassword(password)}}/>
      
      <Pressable
        onPress={props.onPress}
        style={{ margin: 8, padding: 8, }} >
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
    backgroundColor:'#a8dadc'
  },
  button: {
    backgroundColor: 'black',
    width: 200,
    margin: 32,
    padding: 16,
    color: 'white',
    textAlign:'center'
  },
  inputInvalid: {
    marginBottom: 15,
    marginTop: 15,
    height: 50,
    width: 250,
    backgroundColor: '#30336B',
    color: 'white',
    borderWidth: 2,
    borderColor: 'red'
  },
  inputValid: {
    marginBottom: 15,
    marginTop: 15,
    height: 50,
    width: 250,
    backgroundColor: '#30336B',
    color: 'white',
    borderWidth: 2,
    borderColor: 'green',
    
  },
});
