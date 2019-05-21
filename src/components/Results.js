import React, {Component} from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

export default class Results extends Component {
  render() {  
    console.log (this.props.results[0].previewURL)
    return(
        <FlatList
          data={this.props.results}
          renderItem={({ item }) => (
            <View style={styles.list}>
              <Image style={styles.imageThumbnail} source={{ uri: item.previewURL }} />
            </View>
          )}
          numColumns={3}
          keyExtractor={(item) => item.id}
        />
    )
  }
}

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  list: {
    flex: 1, 
    flexDirection: 'column', 
    margin: 1
  }
})