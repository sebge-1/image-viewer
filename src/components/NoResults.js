import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class NoResults extends Component {
  render() {
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="emoticon-sad-outline" size = {45} color = "#808080" />
        <Text style={{marginTop: 30, fontSize: 24}}>No results found. Try again.</Text>
      </View>
    )
  }
}
