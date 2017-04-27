import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Actions
} from 'react-native-router-flux';

class StripePayments extends React.Component {
  state={
    Login: '',
    Password: '',
  };
  render() {
    return(
    <View>
      <Text style={styles.titleText}>Pay With Stripe</Text>
      <TextInput 
	    style={styles.input}
	    placeholder='E-Mail'
	    onChangeText={(text) =>{
	    this.setState({Login: text})}}
      />
      <TextInput 
	    style={styles.input}
	    placeholder='Password'
	    onChangeText={(text) =>{
	    this.setState({Password: text})}}
      />
        <TouchableOpacity
          onPress={() => {
            Actions.payments({
              Login: this.state.Login,
	          Password: this.state.Password
            });
          }}
        >
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
     </View>
    );
  }
}



var styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 75,
    fontSize: 40,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
  },
  buttonText: {
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    margin: 20,
    marginLeft: 20,
    fontSize: 20,
  },
});
export default StripePayments;
