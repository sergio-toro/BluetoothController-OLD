import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { View, Constants, KeepAwake } from 'expo';

import ControllerScreen from './src/screens/ControllerScreen';
import HomeScreen from './src/screens/HomeScreen';


const TabNavigatorApp = TabNavigator({
  Home: { screen: HomeScreen },
  Controller: { screen: ControllerScreen },
}, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
});


export default class App extends Component {
  render() {
    return <TabNavigatorApp />;
  }
}
