import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';

import MainIcon from '../../assets/IconBW2.png';
import Background from '../../assets/bg.jpg';

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: 'Log-In',
  };

  constructor(props) {
    super(props);
    this.state = {
      passwordString: '',
      correoString: '',
      isLoading: false,
      message: '',
    };
  }

  _onCorreoTextChanged = event => {
    this.setState({
      correoString: event.nativeEvent.text,
    });
  };

  _onPasswordTextChanged = event => {
    this.setState({
      passwordString: event.nativeEvent.text,
    });
  };

  _onLoginPressed = () => {
    if (
      this.state.correoString === 'a' &&
      this.state.passwordString === 'a'
    ) {
      this.props.navigation.navigate('Home');
    } else {
      this.setState({ message: 'Wrong email or password' });
    }
  };

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;
    return (
      <ImageBackground source={Background} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text style={styles.description}>Be welcome to the</Text>
          <Text style={styles.description}>Smart Clothes Line</Text>
          <View style={styles.flowRight}>
            <TextInput
              underlineColorAndroid={'transparent'}
              style={styles.Input}
              placeholder="E-mail"
              value={this.state.correoString}
              placeholderTextColor="#ffffff"
              onChange={this._onCorreoTextChanged}
            />
            <TextInput
              secureTextEntry = {true}
              underlineColorAndroid={'transparent'}
              style={styles.Input}
              placeholder={"Password"}
              value={this.state.passwordString}
              placeholderTextColor="#ffffff"
              onChange={this._onPasswordTextChanged}
            />
            <Button
              onPress={this._onLoginPressed}
              color="#48BBEC"
              title="LOGIN"
            />
          </View>
          <Image source={MainIcon} style={styles.image} />
          <Text style={styles.description}>{this.state.message}</Text>
          
          {spinner}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },

  flowRight: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  Input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  description: {
    //marginButtom: 5,
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
});
