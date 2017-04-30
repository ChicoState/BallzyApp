import React from 'react';
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

import PaymentsStyles from '../../styles/PaymentsStyles'

class Payments extends React.Component {

  static navigationOptions = {
    title: 'Payments',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    headerLeft: null,
    tabBarIcon: () => (
      <Image
        source={require('../../img/payments48x48.png')}
        style = {{width: 32, height: 32}}
      />
    ),
  };
  render() {
    return(
      <View style={PaymentsStyles.container}>
        <View style={{flex: 10}}>
          <Text style={PaymentsStyles.title}>Payments</Text>
	        <Button title="Pay with Card" style={PaymentsStyles.button1}
	           onPress={() => { Actions.cardPayments() }}>
	        </Button>
	        <Button title="Pay with Stripe" style={PaymentsStyles.button2}
	           onPress={() => { Actions.stripePayments() }}>
	        </Button>
	     </View>
      </View>
    );
  }
}


export default Payments;
