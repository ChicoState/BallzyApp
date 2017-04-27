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

class CardPayments extends React.Component {
  state={
    cardNo: '',
    cardExp: '',
    cardCvc: '',
  };
  render() {
    return(
    <View>
      <Text style={styles.titleText}>Pay With Card</Text>
      <TextInput
	style={styles.input} 
	placeholder='Card Number'
	onChangeText={(text) =>{
	this.setState({cardNo: text})}}
      />
      <TextInput 
	style={styles.input} 
	placeholder='Expiration'
	onChangeText={(text) =>{ 
	this.setState({cardExp: text})}}
      />
      <TextInput 
	style={styles.input} 
	placeholder='CVC'
	onChangeText={(text) =>{ 
	this.setState({cardCvc: text})}}
      />
        <TouchableOpacity
          onPress={() => {
            Actions.payments({
              cardNo: this.state.cardNo,
	          cardExp: this.state.cardExp,
	          cardCvc: this.state.cardCvc
            });
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
export default CardPayments;
