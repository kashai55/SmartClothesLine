import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';

import MenuItem from '../../Screens/home-page/MenuItem';
import IconBackground from '../../assets/bg.jpg'

export default class HomePage extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  _onClosePressed = () => {
    Alert.alert('El tendedero está destapado')
  };

  _onOpenPressed = () => {
    Alert.alert('El tendedero está tapado')
  };

  _onUpPressed = () => {
    Alert.alert('El tendedero se encuentra arriba')
  };

  _onDownPressed = () => {
    Alert.alert('El tendedero se encuentra abajo')
  };

  render() {
    return (
      <ImageBackground
        source={IconBackground}
        style={styles.mainContainer}>
        <View style={styles.overlayContainer}>
          <View style={styles.top}>
            <Text style={styles.header}>W E L C O M E</Text>
          </View>
          <View style={styles.menuContainer}>
            <MenuItem itemImage={require('../../assets/up.png')} onPress={this._onUpPressed} />
            <MenuItem itemImage={require('../../assets/close.png')} onPress={this._onClosePressed} />
            <MenuItem itemImage={require('../../assets/down.png')} onPress={this._onDownPressed} />
            <MenuItem itemImage={require('../../assets/open.png')} onPress={this._onOpenPressed} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  overlayContainer: {
    backgroundColor: 'rgba(47,163,128,.4)',
    flex: 1
  },
  top: {
    alignItems: 'center',
    height: '30%',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'rgba(255,255,255,.1)',
    borderColor: '#fff',
    borderWidth: 2,
    color: '#fff',
    fontSize: 28,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '70%'
  }
});
