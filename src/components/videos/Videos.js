import React, { Component } from 'react';

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
     <Button onPress={onPress2} title="Camera Roll"/>
    </View>
    <View style={{flex:.2, flexDirection:'row'}}>
      <TouchableHighlight
        onPress={()=>
          this.props.navigation.navigate('picCamera')
        }
        style={styles.NavigationButton}
      >
        <Image
          source={require('./pictures48x48.png')}
        />
      </TouchableHighlight>

      <TouchableHighlight
        onPress={()=>
          this.props.navigation.navigate()
        }
        style={styles.NavigationButton}
      >
        <Image
          source={require('./videorecord48x48.png')}
        />
      </TouchableHighlight>
    </View>
  </View>
   );
 }
}

const onPress2 = () => {
 Alert.alert('We are working on the opening of pictures')
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
},
NavigationButton: {
  backgroundColor: '#121212',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
});
export default Videos;
