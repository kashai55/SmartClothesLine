import React from "react";
import {
  Alert, 
  View,
  Text, 
  Button,
  Image, 
  TextInput, 
  StyleSheet } from "react-native";

global.ipAddress = "192.168.1.27";
global.port = "8080";
  
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      email: ''
    };
  }
  _onEmailTextChanged = event => {
    this.setState({
      email: event.nativeEvent.text
    })
  };

  _onPasswordTextChanged = event => {
    this.setState({
      password: event.nativeEvent.text
    })
  };

  _onUserTextChanged = event => {
    this.setState({
      userName: event.nativeEvent.text
    })
  };

  onRegister (){
    url = "http://" + ipAddress + ":" + port + "/api/v1/login";
    const formData = new FormData();
    formData.append('userName', this.state.userName),
    formData.append('password', this.state.password),
    formData.append('email', this.state.email)

    console.log("url:"+url);
  
    fetch(url,{
      method: 'POST',
      body: formData
    }).then(function (response) {
      return response.json();
    }).then(function (result) { 
      console.log(result);
      if(!result.error){
        this.setState({ 
          status: result.error,
          wholeResult: result,
        });
        Alert.alert("Registro exitoso")
        this.props.navigation.navigate("Login");

      }
      else{
        Alert.alert("Problema al registrarse, inténtelo de nuevo");
        console.log(result);
      }
    }.bind(this)).catch(function (error) {
        console.log("ERROR: " + error);
        alert("Result:" + error)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Ingrese sus datos</Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={this.state.userName}
            autoCapitalize="none"
            placeholderTextColor="rgba(225,225,225,0.7)"
            onChange={this._onUserTextChanged}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={this.state.password}
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="rgba(225,225,225,0.7)"
            onChange={this._onPasswordTextChanged}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={this.state.email}
            autoCapitalize="none"
            placeholderTextColor="rgba(225,225,225,0.7)"
            onChange={this._onEmailTextChanged}
          />
          <Button
            style={styles.buttonContainer}
            title="REGISTER" 
            onPress={ () => {this.onRegister()}}
            color="#48BBEC"
             />
        </View>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../../assets/register.png')} />
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
