import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import ChatStyles from '../../styles/ChatStyles';

import{
  Actions,
  } from 'react-native-router-flux';

//import Messaging from './Messaging';


class Chat extends React.Component {
  static navigationOptions = {

    title: 'Chat',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: () => (
      <Image
        source={require('../../img/conversations48x48.png')}
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
        style={ChatStyles.container}
      >
        <View style={ChatStyles.loginContainer}>
          <Text style={ChatStyles.title}>
            Enter user nickname!
          </Text>
          <TextInput
            style = {ChatStyles.nameInput}
            placeholder='ex: jdoe530'
            onChangeText={ (text) => { this.setState({name: text}); } }
            value = {this.state.name}
          />
          <TouchableOpacity
            style = {ChatStyles.button}
            onPress = {() => {
              Actions.messaging({
                name: this.state.name,
              });
            }}
          >
            <Text style = {ChatStyles.buttonText}>
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


export default Chat;
