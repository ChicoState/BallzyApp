import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA84vIR2YTd3dDpREb9sbv2YjDGurDkgSg",
  authDomain: "ballzyapp-df2af.firebaseapp.com",
  databaseURL: "https://ballzyapp-df2af.firebaseio.com",
  projectId: "ballzyapp-df2af",
  storageBucket: "ballzyapp-df2af.appspot.com",
  messagingSenderId: "239896488494"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
