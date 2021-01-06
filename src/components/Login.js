import React, { Component } from 'react'
import { Button, TextField } from "@material-ui/core";
import Carousel from 'nuka-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Typography from "@material-ui/core/Typography";
import firebase from "firebase/app";
import "firebase/auth";


class Login extends Component {
    constructor(props) {
        super(props);
        this.showSignup = this.showSignup.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            fullName: '',
            lastName: ''
        }
    }

    login(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
        var user = firebase.auth().currentUser;
        if (user != null) {
            user.providerData.forEach(function (profile) {
              console.log("  Name: " + profile.displayName);
              console.log("  Email: " + profile.email);
              console.log("  Photo URL: " + profile.photoURL);
            });
        }
    }

    showSignup(e) {
        e.preventDefault();
        document.getElementById('login-form').style.visibility = "hidden";
    }
    signup(e) {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error);
        })
        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: this.state.fullName
        }).then(function() {
            // Update successful.
            console.log(user.displayName)
        }).catch(function(error) {
            // An error happened.
        });
    }

    handleChange(e) {
        this.setState( { [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="login-frame">
                <div className="right-frame">
                <form id="signup-form">
                    <div className="login-form-group">
                        <div className="login-form-input">
                            <Typography for="exampleInputEmail1" style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px" }}>FullName</Typography>
                            <input className="login-textfield" value={this.state.firstName} onChange={this.handleChange} type="name" name="firstname" id="exampleInputEmail1" placeholder="Full Name" />
                            <div className="space"></div>

                            <Typography for="exampleInputEmail1" style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px" }}>Email Address</Typography>
                            <input className="login-textfield" value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" placeholder="Enter Email" />
                            <div className="space"></div>
                        
                            <Typography for="exampleInputPassword1" style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px"}}>Password</Typography>
                            <input className="login-textfield" value={this.state.password} onChange={this.handleChange} type="password" name="password" id="exampleInputPassword1" placeholder="Password" />
                            <div className="space"></div>
                        </div>
                        <div className="login-form-button">
                            <div className="space"></div>
                            <button className="auth-buttons" onClick={this.signup}>Create Account</button>
                        </div>
                    </div>
                </form>
                <form id="login-form">
                    <div className="login-form-group">
                        <div className="login-form-input">
                            <Typography for="exampleInputEmail1" style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px" }}>Email Address</Typography>
                            <input className="login-textfield" value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleInputEmail1" placeholder="Enter Email" />
                            <div className="space"></div>
                        
                            <Typography for="exampleInputPassword1" style={{ textAlign: "left", color: "#fff", fontSize: "18px", marginBottom: "10px"}}>Password</Typography>
                            <input className="login-textfield" value={this.state.password} onChange={this.handleChange} type="password" name="password" id="exampleInputPassword1" placeholder="Password" />
                            <div className="space"></div>
                        </div>
                        <div className="login-form-button">
                            <button className="auth-buttons" type="submit" onClick={this.login}>Login</button>
                            <div className="space"></div>
                            <button className="auth-buttons" onClick={this.showSignup}>Sign Up</button>
                        </div>
                    </div>
                </form>
                </div>
                <div className="left-frame">
                    <div className="login-carousel">
                        <Carousel>
                            <Typography style={{ padding: 16, textAlign: "center", color: "#fff", fontSize: "30px" }} variant="h2">ADVANCE TO THE NEXT LEVEL OF TRADING</Typography>
                            <Typography style={{ padding: 16, textAlign: "center", color: "#fff", fontSize: "30px" }} variant="h2">GET THE ADVANTAGES OF INSTITUTIONAL TRADERS</Typography>
                            <Typography style={{ padding: 16, textAlign: "center", color: "#fff", fontSize: "30px" }} variant="h2">LIVE DATA & HEADLINES DELIVERED INSTANTLY</Typography>
                        </Carousel>
                    </div>
                </div>
            
            </div>
        )
    }
}
export default Login