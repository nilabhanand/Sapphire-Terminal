import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from "./serviceWorker";
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDzhtFmFzULLbJDl2eOmbVrp_rzNED3Fpg",
    authDomain: "trading-terminal-4b325.firebaseapp.com",
    databaseURL: "https://trading-terminal-4b325.firebaseio.com",
    projectId: "trading-terminal-4b325",
    storageBucket: "trading-terminal-4b325.appspot.com",
    messagingSenderId: "387214226155",
    appId: "1:387214226155:web:c320625c856799c28004ae",
    measurementId: "G-ZNPXHCHT8B"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
