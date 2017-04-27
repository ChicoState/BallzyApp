import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB3mAijmcJamuInn_lUk0vWxZhx7bHVjy0',
  authDomain: 'testballzy.firebaseapp.com',
  databaseURL: 'https://testballzy.firebaseio.com',
  storageBucket: 'testballzy.appspot.com'
}

const firebaseApp = firebase.initializeApp(config);
const myFirebaseRef = firebaseApp.database().ref('list');
export{myFirebaseRef};
//export default Globals;
