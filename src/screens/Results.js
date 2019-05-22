import React, {Component} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { AppContext } from '../contexts/AppContext';
import ThumbNail from '../components/ThumbNail';

export default class Results extends Component {
  render() {  
    return(
      <AppContext.Consumer>
        {(context) => (
          <FlatList
            data={context.results}
            renderItem={({ item }) => (
              <View style={styles.list}>
                <ThumbNail 
                  image={item} 
                  handleSelection={context.updateSelection} 
                  navigation={this.props.navigation}
                />
              </View>
            )}
            numColumns={3}
            keyExtractor={(item) => item.id}
          />
        )
      }
      </AppContext.Consumer>
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