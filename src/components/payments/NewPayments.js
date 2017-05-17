import React from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';


class StripePayments extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      CardNa: '',
      CardNo: '',
      CardMo: '',
      CardYr: '',
      CardCvc: ''
    };
  }
  render() {
    const {navigate} = this.props.navigation;
    return(
    <View style = {styles.container}>
      <Text style={styles.titleText}>New Card</Text>
      <TextInput
	    style={styles.input}
	    placeholder="Name for the Card"
	    onChangeText={(text) =>{
	    this.setState({CardNa: text})}}
      />
      <TextInput
	    style={styles.input}
	    placeholder='Card Number'
	    maxLength={16}
	    onChangeText={(text) =>{
	    this.setState({CardNo: text})}}
      />
      <TextInput
	    style={styles.input}
	    placeholder='Expiration Month'
	    maxLength={2}
	    onChangeText={(text) =>{
	    this.setState({CardMo: text})}}
      />
      <TextInput
	    style={styles.input}
	    placeholder='Expiration Year'
	    maxLength={4}
	    onChangeText={(text) =>{
	    this.setState({CardYr: text})}}
      />
      <TextInput
	    style={styles.input}
	    placeholder='Card CVC'
	    maxLength={3}
	    onChangeText={(text) =>{
	    this.setState({CardCvc: text})}}
      />
        <TouchableOpacity
          onPress={() => {
            navigate('cardPayments', {
              CardNa: this.state.CardNa,
              CardNo: this.state.CardNo,
              CardMo: this.state.CardMo,
              CardYr: this.state.CardYr,
              CardCvc: this.state.CardCvc
            })
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
    marginTop: 75,
    marginBottom: 75,
    fontSize: 40,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 12,
    backgroundColor: '#F7FFF7'
  },
  buttonText: {
    textAlign: 'center',
    borderColor: 'black',
    borderColor: 'black',
    borderWidth: 1,
    margin: 20,
    marginLeft: 20,
    fontSize: 20,
    backgroundColor: '#F7FFF7'
  },
});
export default StripePayments;
