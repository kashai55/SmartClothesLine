import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
  } from 'react-native';

import MenuItem from '../../Screens/home-page/MenuItem';
export default class HomePage extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = {
      open: 'El tendedero está destapado',
      close: 'El tendedero está tapado',
      upFunction: 'El tendedero se encuentra arriba',
      downFunction: 'El tendedero se encuentra abajo',
    };
  }
  _onClosePressed = () => {
    console.log('El tendedero está tapado')
  };

  _onOpenPressed = () => {
    console.log('El tendedero está destapado')
  };
  _onUpPressed = () => {
    console.log('El tendedero se encuentra arriba')
  };
  _onDownPressed = () => {
    console.log('El tendedero se encuentra abajo')
  };
  render() {
    return (
      <ImageBackground 
        source={require('../../assets/bg.jpg')}
        style={styles.MainContainer}>
        <View style={styles.overlayContainer}>
            <View style={styles.top}>
                <Text style={styles.header}>W E L C O M E</Text>
            </View>
            <View style={styles.menuContainer}>
                <MenuItem itemImage={require('../../assets/up.png')} />
                <MenuItem itemImage={require('../../assets/close.png')}/>
                <MenuItem itemImage={require('../../assets/down.png')}/>
                <MenuItem itemImage={require('../../assets/open.png')}/>

            </View>
        </View>
         
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    overlayContainer: {
      flex: 1,
      backgroundColor: 'rgba(47,163,128,.4)'
    },
    top:{
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255,.1)'
    },
    menuContainer: {
        height: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap', 
    } 
});
