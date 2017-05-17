import React from 'react';
import {
  Button,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  ListView,
  listView
} from 'react-native';


import {createCardToken} from './Stripe';

class StripePayments extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      ds: new ListView.DataSource({rowHasChanged: (row1, row2) => row1.CardNa !== row2.CardNa}),
      dataSource: []
    };
    this.list = [];
  }
    renderRow(rowData) {
      return(
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Payments')}}>
            <Text style={styles.card}>{rowData}</Text>
          </TouchableOpacity>
      );
    }

  render() {
    const { params } = this.props.navigation.state;
    return(
    <View style = {styles.container}>
      <Text style={styles.titleText}>Select Your Card</Text>
        <View style={{flex:1, flexDirection: 'column'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Payments')}}>
              <Text style={styles.card}>Amex 0005</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Payments')}}>
               <Text style={styles.card}>Visa 4242</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Payments')}}>
              <Text style={styles.card}>Discover 1117</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Payments')}}>
              <Text style={styles.card}>{params.CardNa} {params.CardNo.slice(-4)}</Text>
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
    margin: 15,
    backgroundColor: '#42033D',
    borderRadius: 5,
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
