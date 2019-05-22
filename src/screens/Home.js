import React from 'react';
import SearchButton from '../components/SearchButton';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AppContext } from '../contexts/AppContext';

export default class Home extends React.Component {
  render() {
    return(
      <AppContext.Consumer>
        {(context) => (
          <View style={{alignItems: 'center'}}>
            <Text style={styles.welcome}>Welcome to Pixabay Image Viewer!</Text>
            <TextInput 
              style={styles.input}
              placeholder={'Search for image'}
              value={context.query}
              onChangeText={query => context.updateQuery(query)}
            />
            <SearchButton navigation={this.props.navigation}/>
          </View>
        )}
      </AppContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
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
})