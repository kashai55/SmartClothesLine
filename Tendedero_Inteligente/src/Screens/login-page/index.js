import * as React from "react";
import {
  Text,
  View,
  Alert,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";

global.ipAddress = "192.168.1.5";
global.port = "8000";

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: "Log-In"
  };

  constructor(props) {
    super(props);
    this.state = {
      userString: '',
      passwordString:'',
      users: [],
      url: "http://" + ipAddress + ":" + port + "/api/v1/login"
    };
  }

  getUsers = () =>{
    fetch('http://192.168.1.5:8000/api/v1/login?userName=' + this.state.userString + '&' + 'password=' + this.state.passwordString, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        if(responseJson === 0){
          Alert.alert('Usuario o contraseña incorrecta.')
        }
        else{
          Alert.alert('Bienvenido.')
          this.props.navigation.navigate("Menu");

        }
    })
    .catch((error) => {
        console.error(error);
    });
  }

  _onUserTextChanged = event => {
    this.setState({
      userString: event.nativeEvent.text
    });
  };

  _onPasswordTextChanged = event => {
    this.setState({
      passwordString: event.nativeEvent.text
    });
  };

  _onMessagePressed = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;
    return (
      <View style={styles.container}> 
        <Text style={styles.description}>Ingrese sus datos</Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.input}
            placeholder="User name"
            placeholderTextColor="rgba(225,225,225,0.7)"
            value={this.state.userString}
            onChange={this._onUserTextChanged}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder={"Password"}
            placeholderTextColor="rgba(225,225,225,0.7)"
            value={this.state.passwordString}
            onChange={this._onPasswordTextChanged}
          />
          <Button
            style={styles.buttonContainer}
            onPress={ () => {this.getUsers()}}
            color="#48BBEC"
            title="LOGIN"
          />
          <TouchableOpacity onPress={this._onMessagePressed}>
            <Text style={styles.description2}>¿No tiene una cuenta? Registrese</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../../assets/login.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "50%",
    height: "50%",
    resizeMode: "contain"
  },

  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    width: 320,
    padding: 50,
    margin: 20,
  },
  loginContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    position: "absolute",
    width: 300,
    height: 100
  },
  input: {
    height: 40,
    backgroundColor: "rgba(225,225,225,0.2)",
    marginBottom: 10,
    padding: 10,
    color: "#fff"
  },
  buttonContainer: {
    backgroundColor: "#2980b6",
    paddingVertical: 15,
    height: 40,
    marginBottom: 10,
    padding: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  },
  description: {
    marginBottom: 25,
    marginTop:25,
    fontSize: 28,
    color: "#fff",
    textAlign: "center"
  },
  description2: {
    marginBottom: 25,
    marginTop:25,
    fontSize: 14,
    color: "#fff",
    textAlign: "center"
  }
});
