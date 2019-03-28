import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity, 
  } from 'react-native';

export default class MenuItem extends React.Component{
    render() {
        return (
            <View style={styles.menuItem}>
                <TouchableOpacity onPress={this.props.onPress} >
                    <Image 
                        source={this.props.itemImage}
                        style={styles.image}/>    
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        width: '50%', 
        height: '50%',
        padding: 20,
        backgroundColor: '#ccc',
        borderColor: '#000',
        borderWidth:3
    },
    image: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
        borderColor: '#fff',
    }
});