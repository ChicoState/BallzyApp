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

import {createCardToken} from './Stripe';

class StripePayments extends React.Component {
  state={
    CardNo: '',
    CardMo: '',
    CardYr: '',
    CardCvc: ''
  };
  render() {
    return(
    <View style = {styles.container}>
      <Text style={styles.titleText}>New Card</Text>
      <TextInput
	    style={styles.input}
	    placeholder='Card Number'
	    onChangeText={(text) =>{
	    this.setState({CardNo: text})}}
      />
      <TextInput
	    style={styles.input}
	    placeholder='Expiration Month'
	    onChangeText={(text) =>{
	    this.setState({CardMo: text})}}
      />
      <TextInput
	    style={styles.input}
	    placeholder='Expiration Year'
	    onChangeText={(text) =>{
	    this.setState({CardYr: text})}}
      />
      <TextInput
	    style={styles.input}
	    placeholder='Card CVC'
	    onChangeText={(text) =>{
	    this.setState({CardCvc: text})}}
      />
        <TouchableOpacity
          onPress={() => {
            const Token = createCardToken(this.state.CardNo, this.state.CardMo, this.state.CardYr, this.state.CardCvc);
            this.props.navigation.navigate('Payments');
          }}
        >
          <Text style={styles.buttonText}>
            Submit
          </Text>
        </TouchableOpacity>
     </View>
    );
  }
}



var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#00BFFF'
  },
  titleText: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 40,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    backgroundColor: '#F7FFF7'
  },
  buttonText: {
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    margin: 20,
    marginLeft: 20,
    fontSize: 25,
    backgroundColor: '#F7FFF7'
  },
});
export default StripePayments;
