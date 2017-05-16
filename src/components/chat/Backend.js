import firebaseApp from '../../globals';
import firebase from 'firebase';

class Backend {
  state = {
    search: '',
  };

  uid = '';
  messagesRef = null;

  //initialize Firebase Backend
  //the database already initialized in globals.js
  constructor() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setUid(user.uid);
      } else {
        firebaseApp.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });
  }

  //setUID sets the user id value for the authenticated user
  setUid(value) {
    this.uid = value;
  }

  //getUID returns the user id from the authentication list
  getUid() {
    return this.uid;
  }

  //loadMessages loads old messages from the database
  loadMessages(callback) {
    this.messagesRef = firebaseApp.database().ref('messages');
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }

  //sendMessage sends a message to the global chat
  sendMessage(message) {
    for(let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      });
    }
  }

  closeChat() {
    if(this.messagesRef) {
      this.messagesRef.off();
    }
  }

}
export default new Backend();
