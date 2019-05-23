
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Results from '../screens/Results';
import DetailView from '../screens/DetailView';

const AppNavigator = createStackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      header: null
    } 
  },
  Results: { 
    screen: Results,
    navigationOptions: {
      headerTitle: 'Search Again',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#282828'
      }
    }
  }, 
  DetailView: { 
    screen: DetailView,
    navigationOptions: {
      headerTitle: 'Back',
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

