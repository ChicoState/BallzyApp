import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:'row'}}>
        <TouchableHighlight
          onPress={()=> {
            Actions.challenges()
          }}
          style={styles.NavigationButton}
        >
          <Image
            source={require('./hometent48x48.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight
          onPress={()=> {
            Actions.chat()
          }}
          style={styles.NavigationButton}
        >
          <Image
            source={require('./conversations48x48.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight
          onPress={()=> {
            Actions.videos()
          }}
          style={styles.NavigationButton}
        >
          <Image
            source={require('./video48x48.png')}
          />
        </TouchableHighlight>

        <TouchableHighlight
          onPress={()=> {
            Actions.payments()
          }}
          style={styles.NavigationButton}
        >
          <Image
           source={require('./payments48x48.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={()=> {
            Actions.users()
          }}
          style={styles.NavigationButton}
        >
          <Image
           source={require('./users48x48.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  NavigationButton: {
    backgroundColor: '#121212',
    flex: 1,
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
