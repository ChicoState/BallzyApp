import React from 'react';


import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux';

class Payments extends React.Component {
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: () => (
      <Image
        source={require('../navigationbar/payments48x48.png')}
        style = {{width: 32, height: 32}}
      />
    ),
  };
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Payments</Text>
          <TouchableOpacity style={styles.smllbutton}
	           onPress={() => {this.props.navigation.navigate('cardPayments')}}>
             <Text style={styles.buttonText}>Pay with Stored Card</Text>
	        </TouchableOpacity>

	        <TouchableOpacity style={styles.smllbutton}
	           onPress={() => {this.props.navigation.navigate('newPayments')}}>
             <Text style={styles.buttonText}>Add New Card</Text>
	        </TouchableOpacity>
	     </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcebfc'
  },
  button1: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 25,
  },
  button2: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 25,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonText: {
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
    fontSize: 15,
    color: '#FFFFFF',
  },
  smllbutton: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#4392f1',
    height: 45,
    width: 150,
    borderRadius: 5,
  },
});
export default Payments;
