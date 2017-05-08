import React, {Component} from 'react';

import {
  StyleSheet,
  Button,
  View,
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Camera from 'react-native-camera';

export class vidCam extends React.Component{
  render() {
    return(
      <View style={styles.container}>
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        captureMode={Camera.constants.CaptureMode.video}
        captureTarget={Camera.constants.CaptureTarget.disk}>
        <Text style={styles.capture} onPress={this.takeVideo.bind(this)}>[Record]</Text>
        <Text style={styles.capture} onPress={this.stopVideo.bind(this)}>[Stop Record]</Text>
      </Camera>
    </View>
  );
}
  takeVideo() {
    this.refs.camera.capture({
      captureMode: Camera.constants.CaptureMode.video,
      captureTarget: Camera.constants.CaptureTarget.disk
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
  }
  stopVideo() {
    this.refs.camera.stopCatpure();
  }
  takePicture() {
    const options = {};
    this.camera.capture({metadata: options})
    .then((data) => console.log(data))
    .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
container: {
flex: 1,
flexDirection: 'row',
},
preview: {
flex: 1,
justifyContent: 'flex-end',
alignItems: 'center'
},
capture: {
flex: 0,
backgroundColor: '#ff0000',
borderRadius: 5,
color: '#000',
padding: 10,
margin: 40
}
});
export default vidCam;
