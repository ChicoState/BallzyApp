import React, { Component } from 'react';
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

class UserChallenges extends Component {


  constructor(props) {
    super(props);

    const myFirebaseRef = firebaseApp.database().ref('list');

    this.itemsRef = myFirebaseRef.child('Challenges');

    this.state = {
      email: '',
      pass: '',
      title: '',
      price: '',
      description: '',
      uid: '',
      chalArr: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
      chalSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1.guid != row2.guid}),
    };

    this.items = [];
    this.tempChallArray = [];


  }

  componentDidMount() {
    this.itemsRef.on("value", (allChallSnapshot) => {
      allChallSnapshot.forEach((challengeSnapshot) => {
        var chall = challengeSnapshot.val();
        this.tempChallArray.push(chall);
      });
      this.setState({
        chalArr: this.tempChallArray
      });
    });

    this.itemsRef.on('child_removed', (dataSnapshot) => {
      this.items = this.items.filter((x) => x.id !== dataSnapshot.key);
      this.setState({
        chalSource: this.state.chalSource.cloneWithRows(this.items)
      })
    });


  }

  componentWillMount() {
    if(firebase.auth().currentUser != null) {
      this.state.uid = firebase.auth().currentUser.uid;
    }
  }

  removeTodo(rowData) {
    this.itemsRef.child(rowData.id).remove();
  }

  renderRow(rowData) {
    return(
      <TouchableHighlight
        onPress={() => this.removeTodo(rowData)}>
        <View>
          <View style={styles.row}>
            <Text style={styles.todoText}>{rowData.text.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  printChals() {
    return this.state.chalArr.map(function(chals, i){
      if(firebase.auth().currentUser.uid == chals.uid) {
        return(
          <View key={i}>
            <Text>Title: {chals.title}</Text>
            <View>

            </View>
            </View>
        );
      }
    });
  }


  render() {
    return (
      <View>
        <View>
          {this.printChals()}
        </View>


      </View>
    );
  }
}

export default UserChallenges;
