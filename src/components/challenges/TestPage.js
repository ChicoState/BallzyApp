import React from 'react';
import NavigationBar from '../navigationbar/NavigationBar';
import {loadData} from './Globals';
//import ReactDom from 'react-dom';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ListView,
} from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';


class TestPage extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
      this.loadDataFromServer = this.loadDataFromServer.bind(this);
    }

    loadDataFromServer(url="http://localhost:8000/challenges/1/", params=null) {
      loadData(
        data => {
          this.setState({data: data});
        },
        url,
        params
      );
    }

    componentDidMount() {
      this.loadDataFromServer();
  }

  render() {
    return(

      <View>
        <Text> {this.state.data} </Text>
        <Text> Hello from Test </Text>
      </View>
    );
  }

}


export default TestPage;
