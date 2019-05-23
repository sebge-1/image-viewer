import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

export default class Home extends React.Component {
  render() {
    return(
      <ImageBackground 
        source={require('../assets/sarandy-westfall-742134-unsplash.jpg')}  
        style={styles.backgroundImage}
      >
        <View style={{alignItems: 'center'}}>
          <View style={styles.textBackground}>
            <Text style={styles.welcome}>Pixabay Image Viewer</Text>
          </View>
          <SearchBar navigation={this.props.navigation}/>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 20
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  textBackground: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: '100%',
    minHeight: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})