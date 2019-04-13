import React, { Component } from "react";
import { Alert, View, ImageBackground,Text } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

//------ Import constant files
import "../../constants/global.js";
import styles from "../../constants/styles.js";
import colors from "../../constants/colors.js";

export default class OptionsPage extends Component {

  static navigationOptions = {
    title: "Sensor de lluvia"
  };

  constructor(props) {
    super(props);
    this.state = {
      //------ Communication values
      sensor_On: true,
      sensor_Off: false
    };
  }

  //------ Post method called when button pressed, searching by item id.
  _onSensorOn() {
    url = "http://" + ipAddress + ":" + port + global.pathSensor;
    const formData = new FormData();
    formData.append("sensor_State", this.state.sensor_On),
      console.log("url:" + url);
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(
        function(result) {
          console.log(result);
          if (!result.error) {
            this.setState({
              status: result.error,
              wholeResult: result
            });
            Alert.alert("El sensor de lluvia está encendido");
            global.estadoSensor = true;
          } else {
            Alert.alert("El sensor de lluvia no se pudo encender, inténtelo de nuevo");
            console.log(result);
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log("ERROR: " + error);
        alert("Result:" + error);
      });
  }

  _onSensorOff() {
    url = "http://" + ipAddress + ":" + port + global.pathSensor;
    const formData = new FormData();
    formData.append("sensor_State", this.state.sensor_Off),
      console.log("url:" + url);
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(
        function(result) {
          console.log(result);
          if (!result.error) {
            this.setState({
              status: result.error,
              wholeResult: result
            });
            Alert.alert("El sensor de lluvia está apagado");
            global.estadoSensor = false;
          } else {
            Alert.alert("No se pudo apagar el sensor, inténtelo de nuevo");
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
      <ImageBackground
        source={require("../../assets/rain.png")}
        style={styles.container}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.containerLog} backgroundColor = {colors.opacityBlack}>
          <Text style={styles.description}>Acá podrá activar o desactivar el sensor de lluvia.</Text>
          <Text style={styles.description}>Para usar los botones de Abrir y Cerrar el tendedero, deberá
          inhabilitar el sensor de lluvia.</Text>
          </View>
          <ActionButton buttonColor={colors.green} title="Sensor">
            <ActionButton.Item
              buttonColor={colors.purple}
              title="Activar "
              onPress={() => this._onSensorOn()}
            >
              <Icon name="md-notifications" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor={colors.red}
              title="Desactivar"
              onPress={() => this._onSensorOff()}
            >
              <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </View>
      </ImageBackground>
    );
  }
}
