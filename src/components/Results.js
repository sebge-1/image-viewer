import React, {Component} from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { ResultsContext } from '../contexts/ResultsContext';


export default class Results extends Component {
  render() {  
    return(
      <ResultsContext.Consumer>
        {(context) => (
          <FlatList
            data={context.results}
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
      </ResultsContext.Consumer>
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