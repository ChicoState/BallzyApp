import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';


//import Messaging from './Messaging';


class Chat extends React.Component {
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    title: 'Chat',
    tabBarIcon: () => (
      <Image
        source={require('../navigationbar/conversations48x48.png')}
        style = {{width: 32, height: 32}}
      />
    ),
  };

  state = {
    name: '',
  };

  render() {
    return(
      <View
        style={styles.container}
      >
        <View style={styles.loginContainer}>
          <Text style={styles.title}>
            Enter user nickname!
          </Text>
          <TextInput
            style = {styles.nameInput}
            placeholder='ex: jdoe530'
            onChangeText={ (text) => { this.setState({name: text}); } }
            value = {this.state.name}
          />
          <TouchableOpacity
            style = {styles.button}
            onPress = {() => this.props.navigation.navigate('Messaging')}
          >
            <Text style = {styles.buttonText}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}
//this a custom prop
var styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcebfc',
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 270,
    width: 300,
    backgroundColor: '#42033D',
    borderColor: '#ffe500',
    borderWidth: 3,
    borderRadius: 5,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    width: 250,
  },
  nameInput: {
    padding: 5,
    width: 250,
    height: 40,
    borderColor: 'black',
    margin: 20,
    backgroundColor: 'white'
  },
  button: {
    height: 50,
    width: 250,
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    backgroundColor: '#4392F1'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    width: 50,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#FFFFFF'
  }
} );

export default Chat;
