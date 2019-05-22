import React, {Component} from 'react';
import { Image, StyleSheet } from 'react-native';

export default class ThumbNail extends Component {
  render() {  
    return(
      <Image style={styles.imageThumbnail} source={{ uri: this.props.image.previewURL }} />
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