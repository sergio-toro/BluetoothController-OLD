import React from 'react';
import { StyleSheet, Text, View, ScrollView, WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World, handsome!</Text>

        <WebView
          style={{width: 320,height:100,flex: 1, backgroundColor: 'red'}}
          automaticallyAdjustContentInsets={false}
          javaScriptEnabled={true}
          source={{ uri: 'file:///android_asset/joystick.html'}}
          onError={(e) => { console.log('ERROR', e); }}
          onLoad={() => { console.log('LOADED'); }}
          onMessage={(evt) => {
            console.log('MESSAGE', evt.nativeEvent.data);
          }}
          renderError={error => { console.log('RENDER ERROR', error); }}
        />


        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
