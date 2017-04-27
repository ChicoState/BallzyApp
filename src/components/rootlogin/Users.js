import React from 'react';
import {StyleSheet, Button, View, Text, Navigator} from 'react-native';

/* This line imports BarInput component from TextInput.js */

/* export dafault is needed to import the class into another file */


class users extends React.Component {
  render() {
    return (

      <View style= {{flex: 1, flexDirection: 'column', backgroundColor: 'yellow'}}>

        <View style={{flex: 3, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.BigBlack}>Ballzy</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'blue'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, backgroundColor: 'white'}}/>
            <View style={{flex: 2, backgroundColor: 'white', justifyContent: 'space-between'}}>
              <View style={{flex:2}}/>
              <Button
                title="Login"
                color="blue"
              />
              <View style={{flex:1}}/>
              <Button
                title="Register"
                color="blue"
              />
              <View style={{flex:2}}/>
            </View>
            <View style={{flex: 1, backgroundColor: 'white'}}/>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  BigBlack: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 80,
  },
});

export default users;
