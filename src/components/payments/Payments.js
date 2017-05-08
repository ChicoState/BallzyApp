import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
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
	        <Button title="Pay with Stored Card" style={styles.button1}
	           onPress={() => {this.props.navigation.navigate('cardPayments')}}>
	        </Button>
	        <Button title="Add New Card" style={styles.button2}
	           onPress={() => {this.props.navigation.navigate('newPayments')}}>
	        </Button>
	     </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#dcebfc'
  },
  button1: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  button2: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
export default Payments;
