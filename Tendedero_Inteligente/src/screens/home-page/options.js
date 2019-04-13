import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

global.SensorOn = true
global.SensorOff = false
 
export default class OptionsPage extends Component {
 
  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        <ActionButton buttonColor="#1abc9c" title="Sensor automático">
          <ActionButton.Item buttonColor='#9b59b6' title="Activar " onPress={() => console.log("notes tapped!")}>
            <Icon name="md-notifications" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='rgb(255,0,0)' title="Desactivar" onPress={() => {}}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
 
}
 
const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});