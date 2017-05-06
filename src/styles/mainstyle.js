'use strict';
import React, {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: '#F7FFF7',
  },
  body: {
    flex: 7,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#F7FFF7',
  },
  appnamecontainer: {
    flex: 6,
  },
  header: {
    flex: 3,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#F7FFF7'
  },
  settingsHeader: {
    flex: 1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor:'#F7FFF7',
    borderBottomWidth: 1,
    borderColor: '#506c64'
  },
  titletext:{
    color: '#42033D',
    fontSize: 30,
  },
  settingstitle:{
    color: '#42033D',
    fontSize: 25,
  },
  buttontext:{
    color: 'white',
    fontSize: 14,
  },
  smllbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#4392f1',
    height: 36,
    width: 72,
    borderRadius: 5,
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
    backgroundColor: '#EFEFEF',
    height: 40,
    borderWidth: 0,
  }
});
