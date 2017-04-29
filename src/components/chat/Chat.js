import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import{
  Actions,
  } from 'react-native-router-flux';

//import Messaging from './Messaging';


class Chat extends React.Component {
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: () => (
      <Image
        source={require('../navigationbar/conversations48x48.png')}
        style = {{width: 32, height: 32}}
      />
    ),
  };
  /*constructor(props) {
    super(props);
    this.state = {
      username: '',
      connectLabel: 'CONNECT',
      buttonDisabled: true,
      errorMessage: ''
    };
    this._onPressOpenChannel = this._onPressOpenChannel.bind(this);
  }
  */

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
            onPress = {() => {
              Actions.messaging({
                name: this.state.name,
              });
            }}
          >
            <Text style = {styles.buttonText}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }


  /*_onPressOpenChannel(){
    this.props.navigator.push({name: 'Channels'});
  }*/
}
//this a custom prop
var styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#00BFFF'
  },
  loginContainer: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: '600',
    width: 250,
    backgroundColor: '#FFFF31',
    borderWidth: 1,
    borderRadius: 5,
  },
  nameInput: {
    padding: 5,
    width: 250,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    backgroundColor: 'white'
  },
  button: {
    height: 50,
    width: 250,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#7F8284',
    padding: 10,
    marginTop: 5,
    backgroundColor: '#AEB3B7'
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
