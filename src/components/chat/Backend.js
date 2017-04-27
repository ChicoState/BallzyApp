import firebase from 'firebase';

class Backend {
  state = {
    search: '',
  };

  uid = '';
  messagesRef = null;
  //initialize Firebase Backend
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBxccEYYuv1ivbKfPN_Tbguh8fKe4uz2lg',
      authDomain: 'ballzyapp-7aba2.firebaseapp.com',
      databaseURL: 'https://ballzyapp-7aba2.firebaseio.com/',
      storageBucket: 'ballzyapp-7aba2.appspot.com',
    });
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setUid(user.uid);
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });



    this.state = {
      newChallenge: '',
      email: '',
      pass: '',
      title: '',
      price: '',
      description: '',
      chalArr: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
      //todoSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row !=row2})
    };

    this.items = [];
    this.tempChallArray = [];

    const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };




  }
  setUid(value) {
    this.uid = value;
  }
  getUid() {
    return this.uid;
  }
  loadMessages(callback) {
    this.messagesRef = firebase.database().ref('messages');
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

  sendMessage(message) {
    for(let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
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
