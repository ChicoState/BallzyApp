import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import firebase from 'firebase';
import firebaseApp from '../../globals'

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

//var Firebase = require('firebase');
import Firebase from 'firebase';

class Challenges extends React.Component {
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.

    title: 'Challenges',
    tabBarIcon: () => (
      <Image
        source={require('../navigationbar/hometent48x48.png')}
        style = {{width: 32, height: 32}}
      />
    ),
  };
  state = {
    search: '',
  };

  constructor(props) {
    super(props);

    const config = {
      apiKey: 'AIzaSyB3mAijmcJamuInn_lUk0vWxZhx7bHVjy0',
      authDomain: 'testballzy.firebaseapp.com',
      databaseURL: 'https://testballzy.firebaseio.com',
      storageBucket: 'testballzy.appspot.com'
    }


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

    const {state} = this.props.navigation;
    this.state.title = state.params ? state.params.chaltitle : "";
    this.state.description = state.params ? state.params.description : "";
    this.state.price = state.params ? state.params.price : "";

    if(firebase.auth().currentUser != null) {
      this.state.uid = firebase.auth().currentUser.uid;
    }

    if(this.state.uid == '') {
      Alert.alert(
        'Warning',
        'You must log in to create challenges',
        [
          {text: 'Cancel', onPress: () => console.log(''), style: ''},
          {text: 'OK', onPress: () => console.log('')},
        ],
          { cancelable: true }
        )
        // No user is signed in.
    }
    else {
      this.addChallenge();
    }

  }


  addChallenge() {
    if (this.state.title !== '' && this.state.description !== '') {
      this.itemsRef.push({
        title: this.state.title,
        description: this.state.description,
        price: this.state.price,
        uid: this.state.uid
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


  renderRow(rowData) {
    return(
      <TouchableHighlight
        onPress={() => this.removeTodo(rowData)}>
        <View>
          <View style={styles.row}>
            <Text style={styles.todoText}>{rowData.text}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }


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

          <View>
              {this.printChals()}

          </View>


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


Challenges.propTypes = {
  chaltitle: React.PropTypes.string,
  description: React.PropTypes.string,
  price: React.PropTypes.string,
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF'
  },
  inputView: {
    paddingTop: 20,
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48afdb',
    borderRadius: 4,
    color: '#48BBEC'
  },
  title: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
  },
  titleInput: {
    padding: 5,
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 10,
    backgroundColor: 'white'
  },

  buttonText: {
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
    fontSize: 20,
    color: '#FFFFFF'
  },

  button: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 90,
    borderColor: '#7F8284',
    backgroundColor: '#AEB3B7',
    borderRadius: 10,
  }
});

export default Challenges;
