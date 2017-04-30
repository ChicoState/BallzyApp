'use strict';
import {
  AppRegistry,
  AsyncStorage,
  View,
  ToolbarAndroid,
  ActivityIndicator,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import React, {Component} from 'react';
import styles from '../../styles/LoginStyles';
import firebaseApp from '../../globals'

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.title = "Login:";
    this.state = {
      email: '',
      password: '',
      loading: false
    }
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
      alert('Login Failed. Please try again'+error);
      });
  }
  render() {
    if (this.state.loading == false) {
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

                  <TouchableOpacity onPress={() => this.login()}>
                    <View style={styles.button}>
                      <Text style={StyleSheet.flatten(styles.buttontext)}>Login</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                    <View style={styles.transparentbutton}>
                      <Text style={StyleSheet.flatten(styles.buttontexttransparent)}>Need Account?</Text>
                    </View>
                  </TouchableOpacity >
                </View>
              </View>
            </View>
            <View style={{flex:2}}/>
          </View>
        </View>
      )
    } else {
      return(
        <ActivityIndicator size="large"/>
      )
    }
  }

}

AppRegistry.registerComponent('Login', () => Login);
