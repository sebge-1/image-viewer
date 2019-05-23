/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import AppProvider from './src/components/AppProvider';
import { AppContainer } from './src/components/AppContainer'

export default class App extends Component{

  render() {

    return (
      <AppProvider>
        <View style={styles.container}>
          <AppContainer/>
        </View>
      </AppProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
