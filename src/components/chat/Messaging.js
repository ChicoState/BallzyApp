import React, {Component} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Backend from './Backend';
import{
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Messaging extends Component{
  state = {
    messages: [],
  }
  componentWillMount() {

  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          name: this.props.name,
        }}
      />
    );
  }
  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }

}

Messaging.defaultProps = {
  name: 'John',
};
Messaging.propTypes = {
  name: React.PropTypes.string,
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#00BFFF'
  }
});
