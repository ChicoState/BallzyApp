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

import { StackNavigator, TabNavigator } from 'react-navigation';

import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import {
    Router,
    Scene,
} from 'react-native-router-flux';

import {
  Platform
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
  },
  tabBarPosition: 'bottom',
})

const App = StackNavigator ({
  Login: { screen: Login },
  Signup: { screen: Signup },
  Mainapp: { screen: MainApp },
  Messaging: { screen: Messaging}
});

export default App;
