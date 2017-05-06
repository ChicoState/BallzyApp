import React from 'react';
import firebaseApp from '../../globals';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import styles from '../../styles/mainstyle'
import { NavigationActions } from 'react-navigation';

class Settings extends React.Component {
  static navigationOptions = {
    header: null,
  }
  async logout() {
    try {
      await firebaseApp.auth().signOut();
      this.props.navigation.navigate('Login');
    } catch (error) {
      alert(error);
    }
  }
  render() {
    const backAction = NavigationActions.back();
    return(
      <View style={{flex: 1}}>
        <View style={styles.settingsHeader}>
          <View style={{flex: .3}}/>
          <View style={{flex:9.4}}>
            <TouchableOpacity onPress={()=>this.props.navigation.dispatch(backAction)}>
                <Image style={{height:28,width: 28}} source={require('./backbutton.png')}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={()=> this.logout()}>
            <View style={styles.smllbutton}>
              <Text style={styles.buttontext}>Log out</Text>
            </View>
          </TouchableOpacity>
          <View style={{flex:.3}}/>
        </View>
        <View style={{flex: 9}}>
        </View>
      </View>
    );
  }
}

export default Settings;
