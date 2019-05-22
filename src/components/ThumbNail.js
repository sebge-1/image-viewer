import React, {Component} from 'react';
import { Image, StyleSheet, TouchableHighlight } from 'react-native';

export default class ThumbNail extends Component {

  navigate = () => {
    this.props.navigation.navigate('DetailView')
  }
  
  handlePress = () => {
    this.props.handleSelection(this.props.image, this.navigate)
  }

  render() {  
    const preview = this.props.image.previewURL;
    return(
      <TouchableHighlight onPress={() => {this.handlePress()}}>
        <Image style={styles.imageThumbnail} source={{ uri: preview }}/>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  }
})