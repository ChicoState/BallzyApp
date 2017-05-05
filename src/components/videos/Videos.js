import React, { Component } from 'react';
import NavigationBar from '../videos/navBar';

import {
  StyleSheet,
  Button,
  View,
  Text,
  Alert,
  Navigator,
  Image,
  TouchableHighlight
} from 'react-native';

import Camera from 'react-native-camera';

class Videos extends React.Component {
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    title: 'Videos',
    tabBarIcon: () => (
      <Image
        source={require('../navigationbar/video48x48.png')}
        style = {{width: 32, height: 32}}
      />
    ),
  };
  render() {
   return(
     <View style={{flex: 1}}>
     <View style={{flex: 2, alignItems: 'center'}}>
     <Text>Hello from videos</Text>
    </View>
    <NavigationBar/>
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
export default Videos;
