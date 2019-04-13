import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import styles from "../../constants/styles.js";

export default class MenuItem extends React.Component {
  render() {
    return (
      <View style={styles.menuItem}>
        <TouchableOpacity>
          <Image source={this.props.itemImage} style={styles.image} />
        </TouchableOpacity>
      </View>
    );
  }
}
