import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
export default function App() {
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
      <Text>Loggin</Text>

      <TextInput style={emailInput} placeholder="Email" onChangeText={(email) => {validInputEmail(email)}} keyboardType="email-address"></TextInput>

      <TextInput style={passwordInput} placeholder="Password" onChangeText={(password) => {validInputPassword(password)}} secureTextEntry={true}></TextInput>
      
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  // #130F40
  // #30336B
  container: {
    flex: 1,
    backgroundColor: '#130F40',
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: 'green'
  },
});