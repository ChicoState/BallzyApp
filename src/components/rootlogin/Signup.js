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
    this.state = {
      email: '',
      password: '',
      loading: false,
    }
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
        this.setState({
          email: '',
          password: '',
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
                  secureTextEntry={true}
                  placeholder={"Password"}
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
