import React from 'react';
import * as firebase from 'firebase';
import firebaseApp from '../../globals'
import ChallengesStyles from '../../styles/ChallengesStyles'

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
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

//var Firebase = require('firebase');
import Firebase from 'firebase';

class Challenges extends React.Component {
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    title: 'Challenges',
    tabBarIcon: () => (
      <Image
        source={require('../../img/hometent48x48.png')}
        style = {{width: 32, height: 32}}
      />
    ),
  };
  state = {
    search: '',
  };

/*  constructor(props) {
    super(props);
    const config = {
      apiKey: 'AIzaSyB3mAijmcJamuInn_lUk0vWxZhx7bHVjy0',
      authDomain: 'testballzy.firebaseapp.com',
      databaseURL: 'https://testballzy.firebaseio.com',
      storageBucket: 'testballzy.appspot.com'
    }
    //const firebaseApp = firebase.initializeApp(config);
    //const myFirebaseRef = firebaseApp.database().ref('list');
    //this.itemsRef = myFirebaseRef.child('Challenges');
    this.state = {
      newChallenge: '',
      email: '',
      pass: '',
      title: '',
      price: '',
      description: '',
      chalArr: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
      //todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row !=row2})
    };
    this.items = [];
    this.tempChallArray = [];
    //const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    //this.state = {
      //dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    //};
  }
*/
/*
  componentDidMount() {
    this.itemsRef.on('child_added', (dataSnapshot) => {
      this.items.push({id: dataSnapshot.key, text: dataSnapshot.val()});
      //this.setState({
      //  todoSource: this.state.todoSource.cloneWithRows(this.items)
      //})
    });
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
      //this.setState({
      //  todoSource: this.state.todoSource.cloneWithRows(this.items)
    //  })
    });
  }
  addChallenge() {
    if (this.state.title !== '' && this.state.description !== '') {
      this.itemsRef.push({
        title: this.state.title,
        description: this.state.description,
        price: this.state.price
      });
      this.setState({
        title: '',
        description: '',
        price: ''
      });
    }
  }
  removeTodo(rowData) {
    this.itemsRef.child(rowData.id).remove();
  }
*/
/*
  renderRow(rowData) {
    return(
      <TouchableHighlight
        //onPress={() => this.removeTodo(rowData)}>
        <View>
          <View style={ChallengesStyles.row}>
            <Text style={ChallengesStyles.todoText}>{rowData.text}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
*/
/*
  printChals() {
    return this.state.chalArr.map(function(chals, i){
      return(
        <View key={i}>
          <Text>Title: {chals.title}</Text>
          <View>
            <Text>Description: {chals.description}</Text>
            <Text>Price: {chals.price}</Text>
          </View>
        </View>
      );
    });
  }
*/
  render() {
    return (
      <View style={ChallengesStyles.container}>
        <View style={{flex:10}}>
          <TextInput
            style={ChallengesStyles.titleInput}
            placeholder='Search'
            onChangeText={(text) => {
                this.setState({
                  search: text,
                });
            }}
            value={this.state.search}
          />


          <View>

          </View>

          <View style={ChallengesStyles.inputView}>
          <TextInput
            style={ChallengesStyles.titleInput}
            placeholder='Title'
            onChangeText={(text) => {
                this.setState({
                  title: text,
                });
              }}
              value={this.state.title}
          />
          <TextInput
            style={ChallengesStyles.titleInput}
            placeholder='Description'
            onChangeText={(text) => {
                this.setState({
                  description: text,
                });
              }}
              value={this.state.description}
          />
          <TextInput
            style={ChallengesStyles.titleInput}
            placeholder='Price'
            onChangeText={(text) => {
                this.setState({
                  price: text,
                });
              }}
              value={this.state.price}
          />

          <TouchableHighlight
            onPress={() => this.addChallenge()}>
            <Text style={ChallengesStyles.buttonText}>
              Create
            </Text>
          </TouchableHighlight>
          </View>

          <View style={{flex:0.5, flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={ChallengesStyles.button}
            onPress={() => {
              Actions.new({
                search: this.state.search,
              });
            }}
          >
          <Text style={ChallengesStyles.buttonText}>
            Search
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ChallengesStyles.button}
          onPress={() => {
            Actions.new({
              search: this.state.search,
            });
          }}
        >
          <Text style={ChallengesStyles.buttonText}>
            Create
          </Text>
        </TouchableOpacity>
        </View>

        </View>
      </View>
    );
  }
}


Challenges.propTypes = {
  chaltitle: React.PropTypes.string,
  description: React.PropTypes.string,
  price: React.PropTypes.string,
};



export default Challenges;
