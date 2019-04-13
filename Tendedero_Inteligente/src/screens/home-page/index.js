import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
  FlatList,
} from 'react-native';

import Up from '../../assets/up.png'
import Open from '../../assets/open.png'
import Down from '../../assets/down.png'
import Close from '../../assets/close.png'

global.ipAddress = "192.168.1.27";
global.port = "8080";

export default class ClotheslinePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Subir tendedero",  color:"#C0C0C0", image: Up},
        {id:2, title: "Abrir tendedero", color:"#87CEEB", image: Open},
        {id:3, title: "Bajar tendedero",  color:"#87CEEB", image: Down},
        {id:4, title: "Cerrar tendedero", color:"#C0C0C0", image: Close},
      ],
      tent_Up: true,
      tent_Down: false,
      line_Up: true,
      line_Down: false
    };
  }

  _onOpenButton (){
    url = "http://" + ipAddress + ":" + port + "/clothesline/openclosed";
    const formData = new FormData();
    formData.append('tent_Up', this.state.tent_Up),

    console.log("url:"+url);
  
    fetch(url,{
      method: 'POST',
      body: formData
    }).then(function (result) { 
      console.log(result);
      if(!result.error){
        this.setState({ 
          status: result.error,
          wholeResult: result,
        });
        Alert.alert("Toldo abierto")

      }
      else{
        Alert.alert("No se pudo abrir el toldo, inténtelo de nuevo");
        console.log(result);
      }
    }.bind(this)).catch(function (error) {
        console.log("ERROR: " + error);
        alert("Result:" + error)
    });
  }

  _onCloseButton (){
    url = "http://" + ipAddress + ":" + port + "/clothesline/openclosed";
    const formData = new FormData();
    formData.append('tent_Up', this.state.tent_Down),

    console.log("url:"+url);
  
    fetch(url,{
      method: 'POST',
      body: formData
    }).then(function (result) { 
      console.log(result);
      if(!result.error){
        this.setState({ 
          status: result.error,
          wholeResult: result,
        });
        Alert.alert("Toldo cerrado")

      }
      else{
        Alert.alert("No se pudo cerrar el toldo, inténtelo de nuevo");
        console.log(result);
      }
    }.bind(this)).catch(function (error) {
        console.log("ERROR: " + error);
        alert("Result:" + error)
    });
  }

  _onUpButton (){
    url = "http://" + ipAddress + ":" + port + "/clothesline/updown";
    const formData = new FormData();
    formData.append('line_Up', this.state.line_Up),
    console.log("url:"+url);
    fetch(url,{
      method: 'POST',
      body: formData
    }).then(function (result) { 
      console.log(result);
      if(!result.error){
        this.setState({ 
          status: result.error,
          wholeResult: result,
        });
        Alert.alert("Tendedero arriba")
      }
      else{
        Alert.alert("Problema al subir el tendedero, inténtelo de nuevo");
        console.log(result);
      }
    }.bind(this)).catch(function (error) {
        console.log("ERROR: " + error);
        alert("Result:" + error)
    });
  }

  _onDownButton (){
    url = "http://" + ipAddress + ":" + port + "/clothesline/updown";
    const formData = new FormData();
    formData.append('line_Up', this.state.line_Down),
    console.log("url:"+url);
    fetch(url,{
      method: 'POST',
      body: formData
    }).then(function (result) { 
      console.log(result);
      if(!result.error){
        this.setState({ 
          status: result.error,
          wholeResult: result,
        });
        Alert.alert("Tendedero arriba")
      }
      else{
        Alert.alert("Problema al subir el tendedero, inténtelo de nuevo");
        console.log(result);
      }
    }.bind(this)).catch(function (error) {
        console.log("ERROR: " + error);
        alert("Result:" + error)
    });
  }

  clickEventListener(item) {
    if (item === 1){
      Alert.alert("Sube")
      this._onUpButton()
    }
    if (item === 3){
      Alert.alert("Baja")
      this._onDownButton()
    }
    if(item === 2){
      Alert.alert("Abre")
      this._onOpenButton()
    }
    if(item === 4){
      Alert.alert("Cierra")
      this._onCloseButton()
    }      
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
                <TouchableOpacity style={[styles.card, {backgroundColor:item.color}]} onPress={() => {this.clickEventListener(item.id)}}>
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