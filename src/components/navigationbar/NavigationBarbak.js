import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'row'}}>
        <View style={styles.NavigationButton}>
          <TouchableOpacity
            onPress={()=> {
              Actions.challenges()
            }}
          >
            <Image
             source={require('./hometent48x48.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.NavigationButton}>
          <TouchableOpacity
            onPress={()=> {
              Actions.chat()
            }}
          >
            <Image
              source={require('./conversations48x48.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.NavigationButton}>
          <TouchableOpacity
            onPress={()=> {
              Actions.videos()
            }}
          >
            <Image
             source={require('./video48x48.png')}
            />
          </TouchableOpacity>
          </View>

        <View style={styles.NavigationButton}>
          <TouchableOpacity
            onPress={()=> {
              Actions.payments()
            }}
          >
            <Image
             source={require('./payments48x48.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.NavigationButton}>
          <TouchableOpacity
            onPress={()=> {
              Actions.users()
            }}
          >
            <Image
             source={require('./users48x48.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  NavigationButton: {
    backgroundColor: '#121212',
    flex: 1,
    opacity: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavigationButtonSelected: {
    backgroundColor: 'black',
    flex: 1,
    opacity: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  }
});
