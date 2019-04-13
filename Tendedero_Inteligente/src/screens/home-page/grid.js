import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList
} from "react-native";

//------ Images imports
import Hanger from "../../assets/hanger.png";
import Settings from "../../assets/settings.png";

//------ Constant files imports
import styles from "../../constants/styles.js";
import colors from "../../constants/colors.js";

export default class GridPage extends Component {
  static navigationOptions = {
    title: "Menu"
  };


  constructor(props) {
    super(props);
    this.state = {
      //------ Items menu in an array.
      data: [
        { id: 1, title: "Tendedero", color: colors.gray, image: Hanger },
        { id: 2, title: "Configuración", color: colors.lightblue, image: Settings}
      ]
    };
  }

  //------ Functions when button pressed, searching by item id.
  clickEventListener(item) {
    if (item === 1) {
      this.props.navigation.navigate("Clothesline");
    }
    if (item === 2) {
      this.props.navigation.navigate("Options");
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

                  //Function call when touching an item.
                  onPress={() => {this.clickEventListener(item.id);}}
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
