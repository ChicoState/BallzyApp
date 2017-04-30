import React, {Component} from 'react';
import CameraStyles from '../../styles/CameraStyles'
import {
  StyleSheet,
  Button,
  View,
  Text,
  Navigator,
  TouchableHighlight
} from 'react-native';

import Camera from 'react-native-camera';

export class picCam extends React.Component{
  render() {
    return(
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'flex-end'}}>
      <View style={{flex: 2, flexDirection: 'column', alignItems: 'flex-start'}}>
      <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'flex-start'}}>
      <Text>Hello from videos</Text>
      <View style={styles.button}>
       <Button onPress={this.picCam} title="Picture"/>
     </View>
     </View>
     </View>
     <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
     <View style={styles.button2}>
       <Button onPress={onPress2} title="Videos"/>
     </View>
     </View>
   </View>
    );
  }
}

const onPress2 = () => {
  Alert.alert('We are working on the upload of video files')
};


export default picCam
