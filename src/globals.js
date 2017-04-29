import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDF5RdOd39js1YoyzeuffPDtlH_0MzlhQM",
  authDomain: "ballzy-d805b.firebaseapp.com",
  databaseURL: "https://ballzy-d805b.firebaseio.com",
  projectId: "ballzy-d805b",
  storageBucket: "ballzy-d805b.appspot.com",
  messagingSenderId: "713552394190"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
