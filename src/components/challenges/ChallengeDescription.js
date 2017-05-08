import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import firebase from 'firebase';
import firebaseApp from '../../globals'
import Firebase from 'firebase';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    listView,
    TouchableHighlight,
    TouchableOpacity,
    ListView,
    Alert,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';


class ChallDescription extends React.Component {
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.

    title: 'Challenge Description',
    tabBarIcon: () => (
      <Image
        source={require('../navigationbar/hometent48x48.png')}
        style = {{width: 32, height: 32}}
      />
    ),
  };

  constructor(props) {
    super(props);

    //const firebaseApp = firebase.initializeApp(config);
    const myFirebaseRef = firebaseApp.database().ref('list');

    this.itemsRef = myFirebaseRef.child('Challenges');

    this.state = {
      newChallenge: '',
      email: '',
      pass: '',
      title: '',
      price: '',
      description: '',
      uid: '',
      pressData: ({}: {[key: number]: boolean}),
      chalSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1.guid != row2.guid}),
    };


    this.items = [];
    this.tempChallArray = [];

  }



  render() {

    return (
      <View style={styles.container}>
        <View style={{flex:10}}>
          <TextInput
            style={styles.titleInput}
            placeholder='Search'
            onChangeText={(text) => {
                this.setState({
                  search: text,
                });
            }}
            value={this.state.search}
          />


        <ListView
          dataSource = {this.state.chalSource}
          renderRow = {this.renderRow.bind(this)}
        />


        <View style={{flex:0.5, flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Actions.new({
              search: this.state.search,
            });
          }}
        >
        <Text style={styles.buttonText}>
          Search
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {this.props.navigation.navigate('New')}}>

          <Text style={styles.buttonText}>
            Create
          </Text>
        </TouchableOpacity>
        </View>

        </View>
      </View>
    );
  }

}

export default ChallDescription;
