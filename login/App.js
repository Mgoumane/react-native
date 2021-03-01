
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Pressable, Link } from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import { NativeRouter as Router, Route } from "react-router-native";

const App = props => {

  const [connected, setConnected] = useState(false);

  const Mamoudou = ()=>{
    setConnected(true)
  }

  return (
    <>
      {connected ? (
        <>
          <Text>Je suis connecté</Text>
          <Router>
            <Route exact path="/" > <Home></Home>  </Route>
          </Router>
        </>
      ) : (
          <>
            <Text> Je ne suis pas connecté</Text>
            <Router>
              <Route exact path="/" > <Login onPress= {Mamoudou}></Login>  </Route>
            </Router>
          </>
        )
      }

    </>
  );
};



export default App;

