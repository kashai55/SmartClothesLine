
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from "react-navigation";



import LoginPage from './Screens/login-page'
import RegisterPage from './Screens/login-page/register.js'
import GridPage from './Screens/home-page/grid.js'
import ClotheslinePage from './Screens/home-page'

const App = createStackNavigator({
  Login: {screen: LoginPage},
  Register: {screen: RegisterPage},
  Menu: {screen: GridPage},
  Clothesline: {screen: ClotheslinePage}
})

export default App 

