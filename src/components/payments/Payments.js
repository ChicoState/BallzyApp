import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import {
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux';

class Payments extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={{flex: 10}}>
          <Text style={styles.title}>Payments</Text>
	        <Button title="Pay with Card" style={styles.button1}
	           onPress={() => { Actions.cardPayments() }}>
	        </Button>
	        <Button title="Pay with Stripe" style={styles.button2}
	           onPress={() => { Actions.stripePayments() }}>
	        </Button>
	     </View>
        <NavigationBar/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#00BFFF'
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
