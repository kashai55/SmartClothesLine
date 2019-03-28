/**
 * 
 import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Omaiga!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/


import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from "react-navigation";



import SearchPage from './Screens/search-page';
import SearchResults from './Screens/search-results';
import LoginPage from './Screens/login-page';


const App = createStackNavigator({
  Login: {screen: LoginPage},
  Home: {screen: SearchPage},
  Results: {screen: SearchResults}
})

export default App 

