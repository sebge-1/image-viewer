
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Results from '../screens/Results';
import DetailView from '../screens/DetailView';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Results: {screen: Results },
  DetailView: { screen: DetailView }
});

export const AppContainer = createAppContainer(AppNavigator);

