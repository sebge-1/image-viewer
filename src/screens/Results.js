import React, {Component} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { AppContext } from '../contexts/AppContext';
import ThumbNail from '../components/ThumbNail';
import NoResults from '../components/NoResults';

export default class Results extends Component {
  render() {  
    return(
      <AppContext.Consumer>
        {(context) => {
          if (context.results.length) {
            return <FlatList
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
          } else {
            return <NoResults/>
          }
        }
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