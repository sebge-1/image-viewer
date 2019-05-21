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
import Results from './src/components/Results';
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
        <View style={{alignItems: 'center'}}>
          <Text style={styles.welcome}>Welcome to Pixabay Image Viewer!</Text>
          <TextInput 
            style={styles.input}
            placeholder={'Search for image'}
            value={this.state.query}
            onChangeText={query => this.setState({ query })}
          />
          <TouchableHighlight onPress = {()=>{this.fetchImages()}}>
            <View style={{marginTop: 20}}>
              <Icon name="search" size = {25} color = "#4285F4" />
            </View>
          </TouchableHighlight>
        </View>
        {this.state.results.length !== 0 && <Results results={this.state.results}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 30
  },
  welcome: {
    fontSize: 20,
    marginTop: 50
  },
  input:{
    height: '10%',
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 50
  }
});
