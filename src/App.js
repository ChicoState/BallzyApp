import React from 'react';

import Challenges from './components/challenges/Challenges';
import New from './components/challenges/New';
import Payments from './components/payments/Payments';
import cardPayments from './components/payments/CardPayments';
import newPayments from './components/payments/NewPayments';
import Videos from './components/videos/Videos';
import User from './components/users/Users';
import Users from './components/users/userList';
import Login from './components/rootlogin/Login';
import Chat from './components/chat/Chat';
import Channels from './components/chat/Channels';
import Messaging from './components/chat/Messaging';
import Signup from './components/rootlogin/Signup';
import Settings from './components/settings/Settings';
import picCam from './components/videos/piccamera';
import vidCam from './components/videos/vidCamera';
import ChallDescription from './components/challenges/ChallDescription';


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
    //Chat: { screen: Chat },
    Channels: {screen: Channels},
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
  swipeEnabled: false,
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
  Login: { screen: Login },
  Signup: { screen: Signup },
  Mainapp: { screen: MainApp },
  Chat: {screen: Chat},
  Messaging: { screen: Messaging},
  Settings: {screen: Settings},
  picCamera: {screen: picCam},
  vidCamera: {screen: vidCam},
  New: {screen: New},
  New: {screen: New},
  cardPayments: { screen: cardPayments },
  newPayments: { screen: newPayments },
  ChallDescription: {screen: ChallDescription},
  User: {screen: User},
});

export default App;
