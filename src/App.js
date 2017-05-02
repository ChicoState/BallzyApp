import React from 'react';

import Challenges from './components/challenges/Challenges';
import New from './components/challenges/New';
import Payments from './components/payments/Payments';
import Videos from './components/videos/Videos';
import Profile from './components/profiles/Profiles';
import Login from './components/rootlogin/Login';
import Chat from './components/chat/Chat';
import Signup from './components/rootlogin/Signup';
import Settings from './components/settings/Settings';


import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { TabViewAnimated, TabBar} from 'react-native-tab-view';
import { View, Image, TouchableOpacity, Button } from 'react-native';

import {
  Platform
} from 'react-native';


const MainApp = TabNavigator (
  {
    Challenges: { screen: Challenges },
    Chat: { screen: Chat },
    Videos: { screen: Videos },
    Payments: { screen: Payments },
    Profile: { screen: Profile },
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#4D89F2',
      },
      indicatorStyle: {
        backgroundColor: '#E54747'
      },
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
      headerStyle: {
        backgroundColor: '#42033D',
        flexDirection: 'row',
      },
      headerTitleStyle: {
        color: '#EFEFEF',
      }
    }),
  }
)

const App = StackNavigator ({
//  Login: { screen: Login },
//  Signup: { screen: Signup },
  Mainapp: { screen: MainApp },
  Settings: { screen: Settings }
});

export default App;
