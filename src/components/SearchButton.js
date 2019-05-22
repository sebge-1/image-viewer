import React, {Component} from 'react';
import { TouchableHighlight, View } from 'react-native';
import {ResultsContext} from '../contexts/ResultsContext';
import  Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchButton extends Component {
  render() {
    return(
      <ResultsContext.Consumer> 
        {(context) => (
          <TouchableHighlight onPress = {()=>{context.fetchImages()}}>
              <View style={{marginTop: 20}}>
                <Icon name="search" size = {25} color = "#4285F4" />
              </View>
          </TouchableHighlight>
          )
        }
      </ResultsContext.Consumer>
    )
  }
}