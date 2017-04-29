'use strict';
import React, {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1
  },
  body: {
    flex: 7,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#F5FCFF',
  },
  appnamecontainer: {
    flex: 6,
  },
  header: {
    flex: 3,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#F5FCFF'
  },
  titletext:{
    color: '#0C2C52',
    fontSize: 30,
  },
  buttontext:{
    color: 'white',
    fontSize: 18,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#5E9DC8',
    height:45,
  },
  buttontexttransparent: {
    color: '#5F6B61',
    fontSize: 14,
  },
  transparentbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
    height:45,
  },
  footer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  btextinput: {
    backgroundColor: '#DCF0F7',
    height: 40,
    borderWidth: 0,
  }
});
