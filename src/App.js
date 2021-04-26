import './App.css';
import React, { Component } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import firebase from 'firebase/app';
import 'firebase/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }
  
  componentDidMount() {
    this.authListener();
  }

  //firebase user authentication
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState( {user} );
      }else {
        this.setState( {user: null} );
      }
    });
  }

  render() {
    return (
      <div className="App">
    {this.state.user ? (<Home />) : (<Login />)}
      </div>
    );
  }
}

export default App;