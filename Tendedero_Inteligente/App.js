
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from "react-navigation";



import LoginPage from './Screens/login-page'
import HangerPage from './Screens/home-page';
import MenuPage from './Screens/home-page';
import RegisterPage from './Screens/register-page'


const App = createStackNavigator({
  Login: {screen: LoginPage},
  Register: {screen: RegisterPage},
  Menu: {screen: MenuPage},
  Hanger: {screen: HangerPage},

//  Settings: {screen: SettingsPage}
})

export default App 

