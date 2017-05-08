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
    <View style = {styles.container}>
      <Text style={styles.titleText}>Select Your Card</Text>
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
          onPress={() => {this.props.navigation.navigate('Payments')}}>
          <Text style={styles.buttonText}>
            Login
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
    backgroundColor: '#F7FFF7'
  },
  buttonText: {
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    margin: 20,
    marginLeft: 20,
    fontSize: 20,
    backgroundColor: '#F7FFF7'
  },
});
export default StripePayments;
