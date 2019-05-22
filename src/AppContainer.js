
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Results from './screens/Results';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Results: {screen: Results }
});

export const AppContainer = createAppContainer(AppNavigator);

