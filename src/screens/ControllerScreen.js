import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Constants, KeepAwake } from 'expo';

import Joystick from '../components/Joystick';

export default class ControllerScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Controller',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };


  render() {
    const { height, width } = Dimensions.get('window');

    return (
      <View
        style={[
          styles.container,
        ]}
      >
        <KeepAwake />
        <Joystick />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
