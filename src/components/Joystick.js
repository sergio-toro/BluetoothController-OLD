import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView, Dimensions } from 'react-native';

export default class Joystick extends Component {
  static propTypes = {
    width: PropTypes.number,
  };

  static defaultProps = {
    width: 100,
  };

  render () {
    const { height, width } = Dimensions.get('window');
    return (
      <WebView
        style={{
          flex: 1,
          width,
          height,
        }}
        automaticallyAdjustContentInsets={false}
        javaScriptEnabled={true}
        source={{ uri: `file:///android_asset/joystick.html`}}
        onError={(e) => { console.log('ERROR', e); }}
        onLoad={() => { console.log('LOADED'); }}
        onMessage={(evt) => {
          console.log('MESSAGE', evt.nativeEvent.data);
        }}
        renderError={error => { console.log('RENDER ERROR', error); }}
      />
    );
  }
}
