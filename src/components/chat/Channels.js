import React, {Component} from 'react';
import firebase from 'firebase';
import firebaseApp from '../../globals';
import md5 from './md5'

import{
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ListView,
  Image
} from 'react-native';

export default class Channels extends Component{
  static navigationOptions = {
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    title: 'Chat',
    tabBarIcon: () => (
      <Image
        source={require('../navigationbar/conversations48x48.png')}
        style = {{width: 32, height: 32}}
      />
    ),
  };

  constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loading: true,
        };
        this.myDatabase = firebaseApp.database().ref();
        this.friendsRef= this.myDatabase.child('users');
        this.key='';
        this.items=[];
  }

  listenForItems() {
    var user = firebaseApp.auth().currentUser;
    this.friendsRef.on("value", (dataSnapshot) => {
      dataSnapshot.forEach((child) => {
        if(child.val().email != user.email)
          this.items.push({
            name:child.val().name,
            email:child.val().email,
            uid:child.val().uid
          });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.items),
        loading: false
      });
    });

}
componentDidMount() {
    this.listenForItems();
}
renderRow(rowData){
      return(
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Chat')}>
          <View style={styles.profileContainer}>
              <Image source={{ uri: 'https://www.gravatar.com/avatar/' + md5(rowData.email) }} style={styles.profileImage}/>
              <Text style={styles.profileName}>{rowData.name}</Text>
          </View>
        </TouchableHighlight>
      );
  }

  render() {
      return (
          <View style={styles.container}>
              <View style={styles.topGroup}>
                  <Text style={styles.myFriends}>My Friends</Text>
                  <TouchableOpacity>
                      <Text style={styles.inviteFriends}>Invite More Friends</Text>
                  </TouchableOpacity>
                  </View>
                  <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}/>
                    <Text style={styles.myFriends}>
                      {this.num}   {this.key}
                    </Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'stretch',
      marginRight: 10,
      marginLeft: 10
  },
  rightButton: {
      marginTop: 10,
      marginLeft: 5,
      marginRight: 10,
      padding: 0,
  },
  topGroup: {
      flexDirection: 'row',
      margin: 10
  },
  myFriends: {
      flex: 1,
      color: 'grey',
      fontSize: 16,
      padding: 5
  },
  inviteFriends: {
      color: 'black',
      padding: 5
  },
  profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
      marginLeft: 6,
      marginBottom: 8,
  },
  profileImage: {
      width: 30,
      height: 30,
      borderRadius: 15,
      marginLeft: 6
  },
  profileName: {
      marginLeft: 6,
      fontSize: 16
  }

})
