import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput, 
  Button, 
  Image, 
  ActivityIndicator
  } from 'react-native';
  
import { Constants } from 'expo';



export default class HomePage extends React.Component {

  static navigationOptions = {
    title: 'Home'
  }

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }


  render() {
    const spinner = this.state.isLoading ? <ActivityIndicator size='large' />: null
    return (
      <View style={styles.container}>



        {spinner}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '20%',
    height: '60%',
    resizeMode: 'contain'
  },

  flowRight: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  SearchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  description: {
    
    fontSize: 18,
    color:  "#656565",
    textAlign: 'center',
  },
});
