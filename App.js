/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import  Icon from 'react-native-vector-icons/FontAwesome';
import { env } from './env.js'

export default class App extends Component{
  state = {
    query: '',
    results: []
  };

  fetchImages = () => {
    const { BASE_URL, apiKeyPrepend, API_KEY, queryPrePend } = env;
    const queryURL = encodeURI(BASE_URL + apiKeyPrepend + API_KEY + queryPrePend + this.state.query);
    fetch(queryURL)
      .then(response => response.json())
      .then(data => this.setState({results: data.hits }));
    };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Pixabay Image Viewer!</Text>
        <TextInput 
          style={styles.input}
          placeholder={'Search for image'}
          value={this.state.query}
          onChangeText={query => this.setState({ query })}
        />
        <TouchableHighlight onPress = {()=>{this.fetchImages()}}>
          <View>
            <Icon name="search" size = {20} color = "#4285F4" />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input:{
    height: '5%',
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 50
  }
});
