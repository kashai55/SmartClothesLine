import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
} from 'react-native';

import MainIcon from '../../assets/IconBW2.png';

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
      this.state.correoString === 'micorreo@hotmail.com' &&
      this.state.passwordString === 'hola'
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
      <View style={styles.container}>
        <Text style={styles.description}>Be welcome to the</Text>
        <Text style={styles.description}>Smart Clothes Line</Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.SearchInput}
            placeholder="E-mail"
            value={this.state.correoString}
            placeholderTextColor="#656565"
            onChange={this._onCorreoTextChanged}
          />
          <TextInput
            secureTextEntry = {true}
            underlineColorAndroid={'transparent'}
            style={styles.SearchInput}
            placeholder={"Password"}
            value={this.state.passwordString}
            placeholderTextColor="#656565"
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
    );
  }
}

const styles = StyleSheet.create({
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

  SearchInput: {
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
    color: '#656565',
    textAlign: 'center',
  },
});

