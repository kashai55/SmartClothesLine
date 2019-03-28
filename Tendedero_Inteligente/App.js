
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from "react-navigation";



import LoginPage from './Screens/login-page'
import HomePage from './Screens/home-page';


const App = createStackNavigator({
  Login: {screen: LoginPage},
  Home: {screen: HomePage}
})

export default App 

