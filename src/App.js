import React from 'react';

import Challenges from './components/challenges/Challenges';
import New from './components/challenges/New';
import Payments from './components/payments/Payments';
import Videos from './components/videos/Videos';
import Users from './components/users/Users';
import Login from './components/rootlogin/Login';
import Chat from './components/chat/Chat';
import Messaging from './components/chat/Messaging';
import Signup from './components/rootlogin/Signup';
import Settings from './components/settings/Settings';
import picCam from './components/videos/piccamera';

import { StackNavigator, TabNavigator } from 'react-navigation';

import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import {
    Router,
    Scene,
} from 'react-native-router-flux';

import {
  Platform,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';


const MainApp = TabNavigator (
  {
    Challenges: { screen: Challenges },
    Chat: { screen: Chat },
    Videos: { screen: Videos },
    Payments: { screen: Payments },
    Users: { screen: Users },
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#42033D'
      }
  },
  tabBarPosition: 'bottom',
  navigationOptions:({navigation}) => ({
  headerRight:
    <TouchableOpacity style={{width: 45}} onPress = {() => navigation.navigate('Settings')}>
      <View style={{alignItems:'center', justifyContent: 'center'}}>
        <Image
          source={require('./img/cog.png')}
          style = {{width: 28, height: 28}}
        />
      </View>
    </TouchableOpacity>,
  headerLeft: null,
  headerStyle: {
    backgroundColor: '#42033D',
    flexDirection: 'row',
    },
    headerTitleStyle: {
      color: '#EFEFEF',
    }
  }),
})

const App = StackNavigator ({
 // Login: { screen: Login },
 // Signup: { screen: Signup },
  Mainapp: { screen: MainApp },
  Messaging: { screen: Messaging},
  Settings: {screen: Settings},
  picCamera: {screen: picCam},
  New: {screen: New}
});

export default App;
