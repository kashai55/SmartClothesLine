import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';

import Up from '../../assets/up.png'
import Open from '../../assets/open.png'
import Down from '../../assets/down.png'
import Close from '../../assets/close.png'

export default class MenuPage extends Component {

  clickEventListener(item) {
    Alert.alert("Hola")
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Subir tendedero",  color:"#C0C0C0", image: Up},
        {id:1, title: "Abrir tendedero", color:"#87CEEB", image: Open},
        {id:2, title: "Bajar tendedero",  color:"#87CEEB", image: Down},
        {id:3, title: "Cerrar tendedero", color:"#C0C0C0", image: Close},
      ]
    };
  }

  render() {
    return (
      <ImageBackground 
      source={require('../../assets/main.jpg')}
      style={styles.container}>
        <View style={styles.container}>
            <FlatList style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            keyExtractor= {(item) => {
                return item.id;
            }}
            renderItem={({item}) => {
                return (
                <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={this.clickEventListener}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <Image style={styles.cardImage} source={item.image}/>
                    <View style={styles.cardFooter}>
                        <Text style={styles.subTitle}>{item.members}</Text>
                    </View>
                </TouchableOpacity>
                )
            }}/>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});     