import React from 'react';

import Challenges from './components/challenges/Challenges';
import New from './components/challenges/New';
import Messaging from './components/chat/Messaging';
import Chat from './components/chat/Chat';
import Payments from './components/payments/Payments';
import Videos from './components/videos/Videos';
import Users from './components/users/Users';

import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import {
    Router,
    Scene,
} from 'react-native-router-flux';

import {
  Platform
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: 54}}>
          <Scene key='challenges' component={Challenges} title='challenges'/>
          <Scene key='new' component={New} title='Create Challenge'/>
          <Scene key='chat' component={Chat} title='chat'/>
          <Scene key='messaging' component={Messaging} title='messaging'/>
          <Scene key='payments' component={Payments} title='payments'/>
          <Scene key='videos' component={Videos} title='videos'/>
          <Scene key='users' component={Users} title='users'/>
        </Scene>
      </Router>
    );
  }
}

export default App;
