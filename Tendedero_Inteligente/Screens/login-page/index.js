import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ActivityIndicator
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

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size="large" />
    ) : null;
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Ingresar</Text>
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
        </View>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../../assets/IconBW.png')} />
        </View>
        {spinner}
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
    backgroundColor: "#2c3e50"
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
    paddingVertical: 15
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
  }
});
