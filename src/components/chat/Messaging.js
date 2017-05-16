import React, {Component} from 'react';
import { GiftedChat, Bubble} from 'react-native-gifted-chat';
import Backend from './Backend';
import{
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Messaging extends Component{
  constructor(props){
    super(props);
    this.state=  {
      messages:[],
      name: '',
    }
    this.renderBubble = this.renderBubble.bind(this);

    //this takes in the parameter passed in from chat screen for username
    //and sets this components prop for name to it
    this.state.name = this.props.navigation.state.params.name;
  }

  componentWillMount() {

  }
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0',
          }
        }}
        />
    );
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }
        }
        user={{
          _id: Backend.getUid(),
          name: this.state.name,
        }}
        renderBubble={this.renderBubble}
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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#00BFFF'
  }
});
