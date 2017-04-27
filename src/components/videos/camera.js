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

const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: 'row',
},
button: {
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
},
button2: {
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  backgroundColor: 'white',
  borderRadius: 10,
  padding: 10,
  height: 50,
},
preview: {
  flex: 1,
  justifyContent: 'flex-end',
    alignItems: 'center'
},
capture: {
  flex: 0,
  backgroundColor: '#fff',
  borderRadius: 5,
  color: '#000',
  padding: 10,
  margin: 40
}
});
export default picCam
