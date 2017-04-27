import React, {Component} from 'react';

import{
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Channels extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#fff'}}> Channels </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#00BFFF'
  }
});
