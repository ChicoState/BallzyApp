import {StyleSheet} from 'react-native';

var ChatStyles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fae6e6'
  },
  loginContainer: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: '600',
    width: 250,
    backgroundColor: '#FFFF31',
    borderWidth: 1,
    borderRadius: 5,
  },
  nameInput: {
    padding: 5,
    width: 250,
    height: 40,
    borderWidth: 0,
    borderColor: 'black',
    margin: 20,
    backgroundColor: 'white'
  },
  button: {
    height: 50,
    width: 250,
    borderWidth: 0,
    borderRadius: 5,
    borderColor: '#7F8284',
    padding: 10,
    marginTop: 5,
    backgroundColor: '#E54747'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    width: 50,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#EFEFEF'
  }
} );



export default ChatStyles;
