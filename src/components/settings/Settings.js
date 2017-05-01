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
        <Button
          onPress={() => this.props.navigation.goBack()}
          title= "Go back to tabbed"
        />
      </View>
    );
  }
}

export default Settings;
