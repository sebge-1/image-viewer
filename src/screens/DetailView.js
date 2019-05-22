import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../contexts/AppContext'

export default class DetailView extends React.Component {
  render() {
    return(
      <AppContext.Consumer>
        {(context) => (
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: context.selectedImage.largeImageURL}}/>
            <Text style={styles.text}>Uploaded by: {context.selectedImage.user}</Text>
          </View>
          )
        }
      </AppContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    minHeight: 300,
    width: '100%',
  },
  text: {
    marginTop: 50,
    fontSize: 18
  }
})