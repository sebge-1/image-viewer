import React, {Component} from 'react';
import { Platform, StyleSheet, TextInput, TouchableNativeFeedback, TouchableHighlight, View } from 'react-native';
import { AppContext } from '../contexts/AppContext';
import  Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchBar extends Component {

  navigate = () => {
    this.props.navigation.navigate('Results')
  }

  handleSubmit = (context) => {
    context.fetchImages(this.navigate);
  }

  render() {
    let TouchablePlatformSpecific = Platform.OS === 'ios' ? 
        TouchableHighlight : 
        TouchableNativeFeedback;

    return(
      <AppContext.Consumer> 
        {(context) => (
          <>
           <TextInput 
            style={styles.input}
            placeholderTextColor= {'white'}
            placeholder={'Search for image'}
            value={context.query}
            onChangeText={query => context.updateQuery(query)}
            onSubmitEditing={() => this.handleSubmit(context)}
         />
          <TouchablePlatformSpecific 
            background={
              Platform.OS === 'android' && Platform.Version >= 21 ?
              TouchableNativeFeedback.Ripple('rgba(0,0,0,.5)', true) :
              TouchableNativeFeedback.SelectableBackground()
            }
            underlayColor='none' 
            onPress={()=>{this.handleSubmit(context)}} 
            >
            <View style={{top: -42, right: -92}}>
              <Icon name="search" size = {30} color = "#808080" />
            </View>
          </TouchablePlatformSpecific>
         </>
        )}
      </AppContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
  input:{
    height: 50,
    width: '60%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    fontSize: 16,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 100
  },
})