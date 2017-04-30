import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  Image,
  View,
  Text,
  Alert,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Camera from 'react-native-camera';
import VideoStyles from '../../styles/VideoStyles';

class Videos extends React.Component {
  static navigationOptions = {
    title: 'Videos',
    tabBarIcon: () => (
      <Image
        source={require('../../img/video48x48.png')}
        style = {{width: 32, height: 32}}
      />
    ),
  };
  render(){
    return(
      <View style={VideoStyles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={VideoStyles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={VideoStyles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

export default Videos;
