import React, { Component } from 'react';
import * as firebase from "react-firebase-hooks";
import './App.css';

class App extends Component {
  constructor(){
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCVlTE8k1KCi7dB-x_dM9ijwABJQQBeSZg",
  authDomain: "payatao-808f7.firebaseapp.com",
  databaseURL: "https://payatao-808f7.firebaseio.com",
  projectId: "payatao-808f7",
  storageBucket: "payatao-808f7.appspot.com",
  messagingSenderId: "1043357548863"
};
firebase.initializeApp(config);
  }
}

export default App;
