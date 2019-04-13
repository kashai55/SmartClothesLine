import * as React from "react";
import {
  Text,
  View,
  Alert,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";

//------ Import constant files
import "../../constants/global.js";
import styles from "../../constants/styles.js";
import colors from "../../constants/colors.js";

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: "Log-In"
  };

  constructor(props) {
    super(props);
    this.state = {
      //------ Communication values
      userString: "",
      passwordString: "",
      users: [],
      url:
        "http://" +
        global.ipAddress +
        ":" +
        global.port +
        global.pathLoginRegister
    };
  }

  getUsers = () => {
    fetch(
      global.pathGetMethod +
        this.state.userString +
        "&" +
        "password=" +
        this.state.passwordString,
      {
        method: "GET"
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson === 0) {
          Alert.alert("Usuario o contraseña incorrecta.");
        } else {
          Alert.alert("Ingreso exitoso");
          this.props.navigation.navigate("Menu");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

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
      <View style={styles.containerLog}>
        <Text style={styles.description}>¡Bienvenido!</Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.input}
            placeholder="User name"
            placeholderTextColor={colors.opacityGray}
            value={this.state.userString}
            onChange={this._onUserTextChanged}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder={"Password"}
            placeholderTextColor={colors.opacityGray}
            value={this.state.passwordString}
            onChange={this._onPasswordTextChanged}
          />
          <Button
            style={styles.buttonContainer}
            onPress={() => {
              this.getUsers();
            }}
            color={colors.bluelight}
            title="LOGIN"
          />
          <TouchableOpacity onPress={this._onMessagePressed}>
            <Text style={styles.description2}>
              ¿No tiene una cuenta? Registrese presionando aquí.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require("../../assets/login.png")}
          />
        </View>
      </View>
    );
  }
}
