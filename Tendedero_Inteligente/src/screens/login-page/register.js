import React from "react";
import { 
    View,
    Text, 
    Button, 
    TextInput, 
    StyleSheet } from "react-native";

export default class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    phone_number: ""
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  signUp = async () => {
    const { username, password, email } = this.state;
    try {
      // here place your signup logic
      console.log("user successfully signed up!: ", success);
    } catch (err) {
      console.log("error signing up: ", err);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Ingrese sus datos</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="rgba(225,225,225,0.7)"
          onChangeText={val => this.onChangeText("username", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="rgba(225,225,225,0.7)"
          onChangeText={val => this.onChangeText("password", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="rgba(225,225,225,0.7)"
          onChangeText={val => this.onChangeText("email", val)}
        />
        <Button title="REGISTER" onPress={this.signUp} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: "rgba(225,225,225,0.2)",
    marginBottom: 10,
    padding: 10,
    color: "#fff"
  },
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    width: 320,
    padding: 50,
    margin: 20
},
description: {
  marginBottom: 25,
  marginTop:25,
  fontSize: 28,
  color: "#fff",
  textAlign: "center"
}
});
