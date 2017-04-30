import {StyleSheet} from 'react-native';


var UsersStyles = StyleSheet.create({
  UserInfo: {
    flex: 3.5,
    backgroundColor: '#fae6e6',
    flexDirection: 'row'
  },

  NavigationButton: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Tabs: {
    flex: 1,
    flexDirection: "row",
  },

  Content: {
    flex: 6.5,
    backgroundColor: 'white',
  },

  profileArea: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  followButton: {
    opacity: 1,
    backgroundColor: '#121212',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  }
})

export default UsersStyles;
