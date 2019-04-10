import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: "Log-In"
  };

  constructor(props) {
    super(props);
    this.state = {
      passwordString: "",
      correoString: "",
      isLoading: false,
      message: ""
    };
  }

  _onCorreoTextChanged = event => {
    this.setState({
      correoString: event.nativeEvent.text
    });
  };

  _onPasswordTextChanged = event => {
    this.setState({
      passwordString: event.nativeEvent.text
    });
  };

  _onLoginPressed = () => {
    if (this.state.correoString === "a" && this.state.passwordString === "a") {
      this.props.navigation.navigate("Menu");
    } else {
      this.setState({ message: "Wrong email or password" });
    }
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
            placeholder="E-mail"
            placeholderTextColor="rgba(225,225,225,0.7)"
            value={this.state.correoString}
            onChange={this._onCorreoTextChanged}
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
            onPress={this._onLoginPressed}
            color="#48BBEC"
            title="LOGIN"
          />
          <TouchableOpacity onPress={this._onMessagePressed}>
            <Text style={styles.description2}>¿No tiene una cuenta? Registrese</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../../assets/IconBW.png')} />
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
