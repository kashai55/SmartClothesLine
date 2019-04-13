
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from "react-navigation";

import LoginPage from './src/screens/login-page'
import RegisterPage from './src/screens/login-page/register.js.js.js'
import GridPage from './src/screens/home-page/grid.js.js.js'
import ClotheslinePage from './src/screens/home-page'
import OptionsPage from './src/screens/home-page/options';

const App = createStackNavigator({
  Login: {screen: LoginPage},
  Register: {screen: RegisterPage},
  Menu: {screen: GridPage},
  Clothesline: {screen: ClotheslinePage},
  Options: {screen: OptionsPage}
})

export default App 

