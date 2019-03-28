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

//import IconHouse from '../../assets/house.png';

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
      this.setState({ message: 'Correo o contraseña incorrecta' });
    }
  };

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Busca casas para comprar</Text>
        <Text style={styles.description}>Bienvenido</Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.SearchInput}
            placeholder="Correo Electronico"
            value={this.state.correoString}
            placeholderTextColor="#656565"
            onChange={this._onCorreoTextChanged}
          />
          <TextInput
            type="password"
            underlineColorAndroid={'transparent'}
            style={styles.SearchInput}
            placeholder="Contraseña"
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
        <Text style={styles.description}>{this.state.message}</Text>
        
        {spinner}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '20%',
    height: '60%',
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
