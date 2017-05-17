'use strict';
import {
  AppRegistry,
  AsyncStorage,
  View,
  ToolbarAndroid,
  ActivityIndicator,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import React, {Component} from 'react';
import styles from './mainstyle.js';
import Login from './Login';
import firebaseApp from '../../globals'

export default class Signup extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);

    this.title = "Sign up:";

    const myFirebaseRef = firebaseApp.database().ref('UserList');

    this.itemsRef = myFirebaseRef.child('Users');

    this.state = {
      first: '',
      last: '',
      email: '',
      password: '',
      uid: '',
      userName: '',
      loading: false,
      //userSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1.guid != row2.guid}),
    };

    this.items = [];
    this.tempChallArray = [];

  }

  componentDidMount() {
    this.itemsRef.on('child_added', (dataSnapshot) => {
      this.items.push({id: dataSnapshot.key, text: dataSnapshot.val()});
      //this.setState({
      //  userSource: this.state.userSource.cloneWithRows(this.items)
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
        //userSource: this.state.userSource.cloneWithRows(this.items)
      //})
    });

  }


  login() {
    this.setState({
      loading: true
    });
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password
    ).then((userData) => {
        this.setState({
          loading: false
        });
        AsyncStorage.setItem('userData', JSON.stringify(userData));
        this.props.navigation.navigate("Mainapp");
      }
    ).catch((error) => {
      this.setState({
        loading: false
      });
      alert('Login Failed. Please try again'+ error);
      });
  }

  signup() {
    this.setState({
      // When waiting for the firebase server show the loading indicator.
      loading: true
    });
    firebaseApp.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password).then(() => {
        alert('Your account was created!');
        this.login();
        this.state.uid = firebaseApp.auth().currentUser.uid;
        this.itemsRef.push({
          email: this.state.email,
          userName: this.state.userName,
          first: this.state.first,
          last: this.state.last,
          uid: this.state.uid
        });
        this.setState({
          email: '',
          password: '',
          first: '',
          last: '',
          userName: '',
          loading: false
        });
    }).catch((error) => {
      this.setState({
        loading: false
      });
      alert("Account creation failed: " + error.message );
    });
  }

  render() {
    if (this.state.loading == false)  {
      return(
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={{flex:2}}/>
            <View style={{flex:6}}>
              <View style={styles.appnamecontainer}/>
              <Text style={StyleSheet.flatten(styles.titletext)}>{this.title}</Text>
            </View>
            <View style={{flex:2}}/>
          </View>
          <View style={styles.body}>
            <View style={{flex:2}}/>
            <View style={{flex: 6, flexDirection: 'column'}}>
              <View style={{flex:3, flexDirection: 'column',
                            justifyContent: 'center'}}>
                <TextInput
                  style={styles.btextinput}
                  onChangeText={(text) => this.setState({email: text})}
                  value={this.state.email}
                  placeholder={"Email Address"}
                />
                <View style={{flex: .5}}/>
                <TextInput
                  style={styles.btextinput}
                  onChangeText={(text) => this.setState({password: text})}
                  value={this.state.password}
                  placeholder={"Password"}
                />
                <View style={{flex: .5}}/>
                <TextInput
                  style={styles.btextinput}
                  onChangeText={(text) => this.setState({first: text})}
                  value={this.state.first}
                  placeholder={"First Name"}
                />
                <View style={{flex: .5}}/>
                <TextInput
                  style={styles.btextinput}
                  onChangeText={(text) => this.setState({last: text})}
                  value={this.state.last}
                  placeholder={"Last Name"}
                />
                <View style={{flex: .5}}/>
                <TextInput
                  style={styles.btextinput}
                  onChangeText={(text) => this.setState({userName: text})}
                  value={this.state.userName}
                  placeholder={"Username"}
                />
                <View style={{flex: 9.5, flexDirection: 'column',
                              justifyContent: 'center'}}>
                  <TouchableOpacity onPress={this.signup.bind(this)}>
                    <View style={styles.button}>
                      <Text style={StyleSheet.flatten(styles.buttontext)}>Sign up</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                    <View style={styles.transparentbutton}>
                      <Text style={StyleSheet.flatten(styles.buttontexttransparent)}>Already signed up?</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{flex:2}}/>
          </View>
        </View>
      )
    } else {
      return (
        <ActivityIndicator size="large"/>
      )
    }
  }
}

AppRegistry.registerComponent('Signup', () => Signup);
