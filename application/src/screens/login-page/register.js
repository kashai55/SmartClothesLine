import React from "react";
import {
  Alert,
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet
} from "react-native";

import "../../constants/global.js";
import styles from "../../constants/styles.js";
import colors from "../../constants/colors.js";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      email: ""
    };
  }
  _onEmailTextChanged = event => {
    this.setState({
      email: event.nativeEvent.text
    });
  };

  _onPasswordTextChanged = event => {
    this.setState({
      password: event.nativeEvent.text
    });
  };

  _onUserTextChanged = event => {
    this.setState({
      userName: event.nativeEvent.text
    });
  };

  onRegister() {
    url =
      "http://" +
      global.ipAddress +
      ":" +
      global.port +
      global.pathLoginRegister;
    const formData = new FormData();
    formData.append("userName", this.state.userName),
      formData.append("password", this.state.password),
      formData.append("email", this.state.email);

    console.log("url:" + url);

    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(function(response) {
        return response.json();
      })
      .then(
        function(result) {
          console.log(result);
          if (!result.error) {
            this.setState({
              status: result.error,
              wholeResult: result
            });
            Alert.alert("Registro exitoso");
            this.props.navigation.navigate("Login");
          } else {
            Alert.alert("Problema al registrarse, inténtelo de nuevo");
            console.log(result);
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log("ERROR: " + error);
        alert("Result:" + error);
      });
  }

  render() {
    return (
      <View style={styles.containerLog}>
        <Text style={styles.description}>Ingrese sus datos</Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={this.state.userName}
            autoCapitalize="none"
            placeholderTextColor={colors.opacityGray}
            onChange={this._onUserTextChanged}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={this.state.password}
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor={colors.opacityGray}
            onChange={this._onPasswordTextChanged}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={this.state.email}
            autoCapitalize="none"
            placeholderTextColor={colors.opacityGray}
            onChange={this._onEmailTextChanged}
          />
          <Button
            style={styles.buttonContainer}
            title="REGISTER"
            onPress={() => {
              this.onRegister();
            }}
            color={colors.bluelight}
          />
        </View>
        <View style={styles.loginContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require("../../assets/register.png")}
          />
        </View>
      </View>
    );
  }
}
