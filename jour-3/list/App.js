import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import List from './components/List'
import SecondList from './components/secondList'

export default function App() {
  
  return (
    <View style={styles.container}>
      <List></List>
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
});
