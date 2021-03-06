import React from 'react';
//import NavigationBar from '../navigationbar/NavigationBar';
import firebase from 'firebase';
import firebaseApp from '../../globals'
import Firebase from 'firebase';
import styles2 from '../../styles/mainstyle'

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
      chalSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1.guid != row2.guid}),
    };


    this.items = [];
    this.tempChallArray = [];

  }


  componentDidMount() {
    this.itemsRef.on('child_added', (dataSnapshot) => {
      this.items.push({id: dataSnapshot.key, text: dataSnapshot.val()});
      this.setState({
        chalSource: this.state.chalSource.cloneWithRows(this.items)
      })
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
      this.setState({
        chalSource: this.state.chalSource.cloneWithRows(this.items)
      })
    });

    const {state} = this.props.navigation;
    this.state.title = state.params ? state.params.chaltitle : "";
    this.state.description = state.params ? state.params.description : "";
    this.state.price = state.params ? state.params.price : "";


    this.addChallenge();

  }

  componentWillMount() {

    this.itemsRef.on('child_removed', (dataSnapshot) => {
      this.items = this.items.filter((x) => x.id !== dataSnapshot.key);
      this.setState({
        chalSource: this.state.chalSource.cloneWithRows(this.items)
      })
    });
    
    if(firebase.auth().currentUser != null) {
      this.state.uid = firebase.auth().currentUser.uid;
    }
  }

  addChallenge() {

    if(this.state.title !== '' && this.state.uid == '') {
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

    if (this.state.title !== '' && this.state.description !== '' && this.state.uid !== '' && this.state.price !== '') {
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

  removeChal(rowData) {
    this.itemsRef.child(rowData.id).remove();
  }

  renderRow(rowData) {
    return(
      <TouchableHighlight

        onPress={() => this.props.navigation.navigate('ChallDescription', {
          challData: rowData
        })}>
        <View>
          <View >
            <Text style={styles.listText}>{rowData.text.title}           ${rowData.text.price}</Text>
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
          <View style={{borderColor: '#331832',borderBottomWidth:0, flexDirection: 'row', alignItems: 'center'}}>


            <View style={{flex: 9.4, flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles2.smllbutton}
                onPress={() => {this.props.navigation.navigate('New')}}>
                <Text style={styles.buttonText}>
                  Create
                </Text>
              </TouchableOpacity>
              <View style={{flex: .04}}/>
              <TouchableOpacity
                style={styles.filterbutton}
                onPress={() => {this.props.navigation.navigate('New')}}>
                <Text style={styles.filtertext}>
                  Filter
                </Text>
              </TouchableOpacity>
              <View style={{flex: .94}}/>
            </View>
            <View style={{flex:.3}}/>
          </View>
        <View style={{flex: .2, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex:.2}}/>

          <View style={{flex:.3}}/>
        </View>
        <View>
          <ListView
            dataSource = {this.state.chalSource}
            renderRow = {this.renderRow.bind(this)}
            />
        </View>
        <View style={{flex:0.5, flexDirection: 'row', justifyContent: 'space-between'}}>
        </View>
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
    margin: 10,
  },
  filtertext: {
    color: '#42033D',
    fontSize: 15,
  },
});

export default Challenges;
