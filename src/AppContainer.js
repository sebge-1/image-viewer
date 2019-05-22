
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Results from './components/Results';

export const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Results: {screen: Results }
});

export const AppContainer = createAppContainer(AppNavigator);

