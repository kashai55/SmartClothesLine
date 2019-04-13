import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
  FlatList
} from "react-native";

//------ Images imports
import Up from "../../assets/up.png";
import Open from "../../assets/open.png";
import Down from "../../assets/down.png";
import Close from "../../assets/close.png";

//------ Constant files imports
import "../../constants/global.js";
import styles from "../../constants/styles.js";
import colors from "../../constants/colors.js";

export default class ClotheslinePage extends Component {
  static navigationOptions = {
    title: "Tendedero"
  };
  
  constructor(props) {
    super(props);
    this.state = {
      //------ Items menu in an array.      
      data: [
        { id: 1, title: "Subir tendedero", color: colors.gray, image: Up },
        { id: 2, title: "Abrir tendedero", color: colors.lightblue, image: Open },
        { id: 3, title: "Bajar tendedero", color: colors.lightblue, image: Down },
        { id: 4, title: "Cerrar tendedero", color: colors.gray, image: Close }
      ],   
      //------ Values needed for communication.
      tent_Up: true,
      tent_Down: false,
      line_Up: true,
      line_Down: false
    };
  }

  //------ Post method called when button pressed, searching by item id.
  _onOpenButton() {
    url = "http://" + global.ipAddress + ":" + global.port + global.pathOpenClosed;
    const formData = new FormData();
    formData.append("tent_Up", this.state.tent_Up), console.log("url:" + url);
    fetch(url, {
      method: "POST",
      body: formData
    })
      .then(
        function(result) {
          console.log(result);
          if (!result.error) {
            this.setState({status: result.error, wholeResult: result});
            Alert.alert("Toldo abierto");
          }else {
            Alert.alert("No se pudo abrir el toldo, inténtelo de nuevo");
            console.log(result);
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log("ERROR: " + error);
        alert("Result:" + error);
      });
  }

  _onCloseButton() {
    url = "http://" + ipAddress + ":" + port + global.pathOpenClosed;
    const formData = new FormData();
    formData.append("tent_Up", this.state.tent_Down), console.log("url:" + url);
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
            Alert.alert("Toldo cerrado");
          } else {
            Alert.alert("No se pudo cerrar el toldo, inténtelo de nuevo");
            console.log(result);
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log("ERROR: " + error);
        alert("Result:" + error);
      });
  }

  _onUpButton() {
    url = "http://" + ipAddress + ":" + port + global.pathUpDown;
    const formData = new FormData();
    formData.append("line_Up", this.state.line_Up), console.log("url:" + url);
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
            Alert.alert("Tendedero arriba");
          } else {
            Alert.alert("Problema al subir el tendedero, inténtelo de nuevo");
            console.log(result);
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log("ERROR: " + error);
        alert("Result:" + error);
      });
  }

  _onDownButton() {
    url = "http://" + ipAddress + ":" + port + global.pathUpDown;
    const formData = new FormData();
    formData.append("line_Up", this.state.line_Down), console.log("url:" + url);
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
            Alert.alert("Tendedero abajo");
          } else {
            Alert.alert("Problema al subir el tendedero, inténtelo de nuevo");
            console.log(result);
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log("ERROR: " + error);
        alert("Result:" + error);
      });
  }

  //------ When an item is pressed, a Post method function is called. Some buttons are dsbled because of the sensor state.
  clickEventListener(item) {
    if (item === 1) {
      Alert.alert("Sube");
      this._onUpButton();
    } else if (item === 3) {
      Alert.alert("Baja");
      this._onDownButton();
    } else {
      if (global.estadoSensor === false) {
        if (item === 2) {
          Alert.alert("Abierto");
          this._onOpenButton();
        }
        else if (item === 4) {
          Alert.alert("Cerrado");
          this._onCloseButton();
        }
      } else {
        Alert.alert(
          "Debe apagar el sensor de lluvia en la sección de Configuraciones."
        );
      }
    }
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/main.jpg")}
        style={styles.container}
      >
        <View style={styles.container}>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            keyExtractor={item => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={[styles.card, { backgroundColor: item.color }]}
                  onPress={() => {
                    this.clickEventListener(item.id);
                  }}
                >
                  <View style={styles.cardHeader}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                  <Image style={styles.cardImage} source={item.image} />
                  <View style={styles.cardFooter}>
                    <Text style={styles.subTitle}>{item.members}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}
