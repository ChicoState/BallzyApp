import React from 'react';
import firebaseApp from '../../globals';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import styles from '../../styles/mainstyle'

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
    return(
      <View style={{flex: 1}}>
        <View style={styles.settingsHeader}>
          <View style={{flex:9.7}}/>
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
