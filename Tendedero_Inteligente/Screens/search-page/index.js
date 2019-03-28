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
//import IconHouse from '../../assets/house.png'


function urlForQueryAndPage(key, value, pageNumber) {
  const data = {
    country: 'uk',
    pretty: 1,
    encoding: 'json',
    listing_type: 'buy',
    action: 'search_listings',
    page: pageNumber
  }

  data[key] = value

  const queryString = Object.keys(data)
    .map(key => `${key}=${encodeURIComponent(data[key])}`).join('&')

  return `https://api.nestoria.co.uk/api?${queryString}`
}

export default class SearchPage extends React.Component {

  static navigationOptions = {
    title: 'Buscador de propiedades'
  }

  constructor(props) {
    super(props)
    this.state = {
      searchString: '',
      isLoading: false,
      message: ''
    }
  }

   _executeQuery = async (query) => {
    this.setState({      isLoading: true    })
    
    try {
      const response = await fetch(query)
      const json = await response.json()
      this._handleResponse(json.response)
    } catch(error) {
        this.setState({
          isLoading: false,
          message: `Ocurrio un error ${error}`
        })
    }
  }

  _handleResponse = (response) => {
    this.setState({
      isLoading: false,
      message: ''
    })
   
    if (response.application_response_code.substr(0, 1) === '1') {
      this.props.navigation.navigate('Results', { listings: response.listings })
    } else {
      this.setState({ message: 'No hay resultados, buscar de nuevo'})
    }
  }

  _onSearchPressed = () => {
    const query = urlForQueryAndPage( 'place_name', this.state.searchString, 1)

    this._executeQuery(query)
  }

  _onSeacrhTextChanged = (event) => {
    this.setState({
      searchString: event.nativeEvent.text
    })
  }

  /*
  _executeQuery = (query) => {
    this.setState({
      isLoading: true
    })
    fetch(query).then(response => response.json())
      .then(json => this._handleResponse(json.response))
      .catch(error => {
        this.setState({
          isLoading: false,
          message: `Ocurrio un error ${error}`
        })
      })
  }*/

  

  render() {
    const spinner = this.state.isLoading ? <ActivityIndicator size='large' />: null
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
        Busca casas para comprar
        </Text>
        <Text style={styles.description}>
        Busca por nombre de lugar o por codigo postal
        </Text>
        <View style={styles.flowRight}>
          <TextInput
              underlineColorAndroid={'transparent'}
              style={styles.SearchInput}
              placeholder="Buscar por nombre o codigo postal"
              value={this.state.searchString}
              placeholderTextColor="#656565"
              onChange={this._onSeacrhTextChanged}
          />
          <Button 
            onPress={this._onSearchPressed}
            color="#48BBEC"
            title="Buscar"
          />
        </View>
        <Text style={styles.description}>
        {this.state.message}
        </Text>
        
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
