/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import Results from './src/components/Results';
import ResultsProvider from './src/components/ResultsProvider';
import SearchButton from './src/components/SearchButton';

export default class App extends Component{
  state = {
    query: ''
  };

  render() {
    return (
      <ResultsProvider>
        <View style={styles.container}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.welcome}>Welcome to Pixabay Image Viewer!</Text>
            <TextInput 
              style={styles.input}
              placeholder={'Search for image'}
              value={this.state.query}
              onChangeText={query => this.setState({ query })}
            />
            <SearchButton/>
          </View>
          <Results/>
        </View>
      </ResultsProvider>
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
