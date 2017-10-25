import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants, KeepAwake } from 'expo';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Home',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };


  render() {
    return (
      <View
        style={styles.container}
      >
        <Text>Home screen!</Text>
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
