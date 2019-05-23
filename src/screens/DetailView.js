import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppContext } from '../contexts/AppContext'

export default class DetailView extends React.Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Icon name="home" size = {30} color = "#fff" style={{paddingRight: 20}} onPress={() => navigation.navigate('Home')} />
      )
    }
  }
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
    justifyContent: 'center',
    backgroundColor: "black"
  },
  image: {
    minHeight: 300,
    width: '100%',
  },
  text: {
    marginTop: 50,
    fontSize: 18,
    color: 'white'
  }
})