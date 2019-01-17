import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import MainStackNavigator from './MainStackNavigator';

const AuthNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainStackNavigator,
});

AuthNavigator.navigationOptions = {
  header: null
}
const AppContainer = createAppContainer(AuthNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer

