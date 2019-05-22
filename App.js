/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import ResultsProvider from './src/components/ResultsProvider';
import { AppContainer } from './src/AppContainer'

export default class App extends Component{

  render() {

    return (
      <ResultsProvider>
        <View style={styles.container}>
          <AppContainer/>
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
  }
});
