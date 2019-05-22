import React, {Component} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ResultsContext } from '../contexts/ResultsContext';
import ThumbNail from '../components/ThumbNail';

export default class Results extends Component {
  render() {  
    return(
      <ResultsContext.Consumer>
        {(context) => (
          <FlatList
            data={context.results}
            renderItem={({ item }) => (
              <View style={styles.list}>
                <ThumbNail image={item}/>
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
  list: {
    flex: 1, 
    flexDirection: 'column', 
    margin: 1
  }
})