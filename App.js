/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import { env } from './env.js'

export default class App extends Component{
  state = {
    query: ''
  };

  fetchImages = query => {
    console.log(query)
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Pixabay Image Viewer!</Text>
        <TextInput 
          placeholder={'Search for image'}
          value={this.state.query}
          onChangeText={query => this.setState({ query })}
        />
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
  }
});
