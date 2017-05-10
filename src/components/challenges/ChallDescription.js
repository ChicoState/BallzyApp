import React from 'react';
//import NavigationBar from '../navigationbar/NavigationBar';
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
      removeData: '',
      challData: '',
      pressData: ({}: {[key: number]: boolean}),
      chalSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1.guid != row2.guid}),
    };


    this.items = [];
    this.tempChallArray = [];

  }

  componentDidMount() {

  }

  componentWillMount() {
    const {state} = this.props.navigation;
    this.state.challData = state.params ? state.params.challData : "";

    if(firebase.auth().currentUser != null) {
      this.state.uid = firebase.auth().currentUser.uid;
    }
  }

  removeChal(rowData) {
    if(this.state.uid == rowData.text.uid) {
      this.itemsRef.child(rowData.id).remove();
    }
    else if(this.state.uid != rowData.text.uid){
      Alert.alert(
        'Warning',
        'You do not own this challenge and cannot remove it',
        [
          {text: 'Cancel', onPress: () => console.log(''), style: ''},
          {text: 'OK', onPress: () => console.log('')},
        ],
          { cancelable: true }
        )
    }
    else {
      Alert.alert(
        'Warning',
        'You must log in to create challenges',
        [
          {text: 'Cancel', onPress: () => console.log(''), style: ''},
          {text: 'OK', onPress: () => console.log('')},
        ],
          { cancelable: true }
        )
    }
  }


  renderRow(rowData) {
    if(this.state.uid == '') {
      this.state.removeData = rowData;
    }
    return(
      <TouchableHighlight
        onPress={() => this.removeChal(this.state.removeData)}>
        <View>
          <View>
            <Text style={styles.listText}>{this.state.challData.text.title}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }



  render() {

    return (
      <View style={styles.container}>
        <View style={{flex:10}}>

          <Text style={styles.challDesc}>Title: {this.state.challData.text.title}</Text>
          <Text style={styles.challDesc}>Description: {this.state.challData.text.description}</Text>
          <Text style={styles.challDesc}>Reward: {this.state.challData.text.price}</Text>

          <TouchableOpacity
            style={styles.filterbutton}
            onPress={() => this.removeChal(this.state.challData)}>
            <Text style={styles.filtertext}>
              Remove
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcebfc'
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
  SearchInput: {
    borderRadius: 5,
    padding: 5,
    height: 40,
    borderWidth: 0,
    borderColor: 'black',
    margin: 10,
    backgroundColor: '#FFFFFF',
    flex: 9
  },
  buttonText: {
    alignSelf: 'center',
    textAlign: 'center',
    padding: 5,
    fontSize: 15,
    color: '#FFFFFF'
  },
  listText: {
    paddingTop: 5,
    fontSize: 25,
  },
  challDesc: {
    paddingTop: 10,
    fontSize: 30,

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
  },
    searchbutton: {
    backgroundColor: '#4392f1',
    flex: 1,
    height: 38,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterbutton: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    height: 36,
    width: 72,
    borderRadius: 5,
  },
  filtertext: {
    color: '#42033D',
    fontSize: 15,
  },
});

export default ChallDescription;
