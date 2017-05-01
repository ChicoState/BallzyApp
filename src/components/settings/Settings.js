import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  };
  render() {
    return(
      <View>
        <Text>Hello from settings</Text>
      </View>
    );
  }
}

export default Settings;
