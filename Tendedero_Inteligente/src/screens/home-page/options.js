import * as React from "react";
import {
    Text,
    View,
    Alert,
    StyleSheet
} from "react-native";

import SwitchButton from './switch'

global.ipAddress = "192.168.1.5";
global.port = "8000";
global.switchAuto = true

export default class LoginPage extends React.Component {
    static navigationOptions = {
        title: "Log-In"
    };

    constructor(props) {
        super(props);
        this.state = {
            switchValue: true,
        };
    }

    _toggleSwitch = (value) => {
        this.setState({switchValue: value})
        if(this.switchAuto === this.state.switchValue){
            this.switchAuto = true
        }
        else{
            this.switchAuto = false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>Habilitar sensor de humedad</Text>
                <View style={styles.flowRight}>
                    <SwitchButton
                        _toggleSwitch={this._toggleSwitch}
                        switchValue={this.state.switchValue}
                        style={styles.switch}
                    />
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
        marginTop: 25,
        fontSize: 28,
        color: "#fff",
        textAlign: "center"
    },
    description2: {
        marginBottom: 25,
        marginTop: 25,
        fontSize: 14,
        color: "#fff",
        textAlign: "center"
    }
});
