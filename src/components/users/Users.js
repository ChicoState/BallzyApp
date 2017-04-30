import React from 'react';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import Posts from './Posts';
import UserChallenges from './UserChallenges';

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  Button,
} from 'react-native';

import UsersStyles from '../../styles/UsersStyles'

class Users extends React.Component {
  static navigationOptions = {
    title: 'Users',
    tabBarIcon: () => (
      <Image
        source={require('../../img/users48x48.png')}
        style = {{width: 32, height: 32}}
      />
    ),
  };
  render() {
    return(
      <View style={{flex:10}}>
        <View style={{flex: 10}}>
          <View style={UsersStyles.UserInfo}>
            <View style={{flex: 3}}>
            </View>
            <View style={UsersStyles.profileArea}>
              <View style={{flex: 7}}>
                <Image
                  style={UsersStyles.image}
                  source={require('./profile.png')}
                />
              </View>
              <View style={{flex: 3}}>
                <View style={{flex: 1}}>
                  <Text>Followers:</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text>Posts:</Text>
                </View>
              </View>
            </View>
            <View style={{flex: 3}}>
            </View>
          </View>
          <View style={UsersStyles.Content}>
            <ScrollableTabView
              renderTabBar={() => <DefaultTabBar />}
              tabBarBackgroundColor= '#E54747'
              tabBarInactiveTextColor = 'white'
              tabBarActiveTextColor = 'white'
              tabBarUnderlineStyle = {{
                backgroundColor: 'white',
                opacity: .2
              }}
            >
              <Posts tabLabel='Posts'/>
              <UserChallenges tabLabel='Challenges'/>
            </ScrollableTabView>
          </View>
        </View>
      </View>
    );
  }
}

export default Users;
