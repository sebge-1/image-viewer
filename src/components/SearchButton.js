import React, {Component} from 'react';
import { TouchableHighlight, View } from 'react-native';
import { AppContext } from '../contexts/AppContext';
import  Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchButton extends Component {

  navigate = () => {
    this.props.navigation.navigate('Results')
  }

  handlePress = (context) => {
    context.fetchImages(this.navigate)
  }

  render() {
    return(
      <AppContext.Consumer> 
        {(context) => (
          <TouchableHighlight onPress = {()=>{this.handlePress(context)}}>
              <View style={{marginTop: 20}}>
                <Icon name="search" size = {25} color = "#4285F4" />
              </View>
          </TouchableHighlight>
          )
        }
      </AppContext.Consumer>
    )
  }
}