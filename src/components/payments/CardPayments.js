import React from 'react';
import {
  Button,
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
    CardNa: 'Master Card',
    CardNo: '',
    CardMo: '',
    CardYr: '',
    CardCvc: ''
  };
  render() {
    return(
    <View style = {styles.container}>
      <Text style={styles.titleText}>Select Your Card</Text>
        <View style={{flex: 20, flexDirection: 'column'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Payments')}}>
              <Text style={styles.card}>Amex</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Payments')}}>
               <Text style={styles.card}>Visa</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Payments')}}>
              <Text style={styles.card}>Discover</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Payments')}}>
              <Text style={styles.card}>{this.state.CardNa}</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  card: {
    fontSize: 16,
    color: '#F7FFF7',
    height: 100,
    width: 160,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    backgroundColor: '#42033D'
  },
  card2: {
    fontSize: 16,
    height: 100,
    width: 160,
    color: '#F7FFF7',
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    marginBottom: 80,
    backgroundColor: '#42033D'
  },
  buttonText: {
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 2,
    margin: 20,
    marginLeft: 20,
    fontSize: 20,
    backgroundColor: '#F7FFF7'
  },
});
export default StripePayments;
