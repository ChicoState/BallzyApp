import React from 'react';

import Challenges from './components/challenges/Challenges';
import New from './components/challenges/New';
import Payments from './components/payments/Payments';
import Videos from './components/videos/Videos';
import Users from './components/users/Users';
import Login from './components/rootlogin/Login'

import Signup from './components/rootlogin/Signup'

import { StackNavigator, TabNavigator } from 'react-navigation';

import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import {
    Router,
    Scene,
} from 'react-native-router-flux';

import {
  Platform,
  Image,
} from 'react-native';


const MainApp = TabNavigator (
  {
    Challenges: { screen: Challenges },
    Payments: { screen: Payments },
    Videos: { screen: Videos },
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
  Singup: { screen: Signup },
  Mainapp: { screen: MainApp }
});

export default App;
