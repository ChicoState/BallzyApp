import {StyleSheet} from 'react-native';

var pink_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAE6E6',
  },
  inputView: {
    paddingTop: 20,
  },
  input: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 0,
    borderRadius: 4,
    color: 'white'
  },
  title: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
  },
  TextInput: {
    padding: 5,
    height: 40,
    borderWidth: 0,
    margin: 10,
    backgroundColor: 'white',
  },

  buttonText: {
    fontSize: 20,
    color: '#EFEFEF',
  },

  button: {
    textAlign: 'center',
    borderWidth: 0,
    borderRadius: 5,
    overflow: 'hidden',
    height: 40,
    width: 90,
    backgroundColor: '#E54747',
  }
});

var styles = StyleSheet.create({
  colBody: {
    flex: 1,
    backgroundColor: '#fcfafa',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rowBody: {
    flex: 1,
    backgroundColor: '#fcfafa',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  TextInput: {
    padding: 5,
    height: 40,
    borderWidth: 0,
    backgroundColor: '#f1e9db',
  },

  buttonText: {
    fontSize: 20,
    color: '#EFEFEF',
  },

  button: {
    textAlign: 'center',
    borderWidth: 0,
    borderRadius: 5,
    overflow: 'hidden',
    height: 40,
    width: 90,
    backgroundColor: '#E54747',
  }
});


export default styles;
