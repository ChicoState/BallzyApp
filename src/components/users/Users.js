import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
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


class Users extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: () => (
      <Image
        source={require('../navigationbar/users48x48.png')}
        style = {{width: 32, height: 32}}
      />
    ),
  };
  render() {
    return(
      <View style={{flex:10}}>
        <View style={{flex: 10}}>
          <View style={styles.UserInfo}>
            <View style={{flex: 3}}>
            </View>
            <View style={styles.profileArea}>
              <View style={{flex: 7}}>
                <Image
                  style={styles.image}
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
          <View style={styles.Content}>
            <ScrollableTabView
              renderTabBar={() => <DefaultTabBar />}
              tabBarBackgroundColor= 'black'
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

var styles = StyleSheet.create({
  UserInfo: {
    flex: 3.5,
    backgroundColor: '#00BFFF',
    flexDirection: 'row'
  },

  NavigationButton: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Tabs: {
    flex: 1,
    flexDirection: "row",
  },

  Content: {
    flex: 6.5,
    backgroundColor: 'white',
  },

  profileArea: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  followButton: {
    opacity: 1,
    backgroundColor: '#121212',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  }
})
