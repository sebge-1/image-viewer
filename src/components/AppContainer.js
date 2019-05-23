
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import Home from '../screens/Home';
import Results from '../screens/Results';
import DetailView from '../screens/DetailView';

const AppNavigator = createStackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      header: null, 
      ...Platform.select ({
        ios: {
          headerBackTitle: 'Search Again'
        }
      })
    } 
  },
  Results: { 
    screen: Results,
    navigationOptions: {
      ...Platform.select ({
        android: {headerTitle: 'Search Again'},
        ios: {headerBackTitle: 'Back'}
      }),
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#282828'
      }
    }
  }, 
  DetailView: { 
    screen: DetailView,
    navigationOptions: {
      ...Platform.select ({
        android: {headerTitle: 'Back'},
      }),
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#282828'
      }
    }
  }
}, {
  initialRouteName: 'Home'
});

export const AppContainer = createAppContainer(AppNavigator);

