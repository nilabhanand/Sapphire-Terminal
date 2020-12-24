import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
import Articles from "./Articles";
import Markets from "./Markets";
import Tweets from "./Tweets";
import Dashboard from "./Dashboard";
import TweetList from "./TweetList";
import Forum from "./Forum";
import Charts from "./Charts";
import Typography from "@material-ui/core/Typography";
import firebase from "firebase/app";
import "firebase/auth";

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            activeTab: 0
        }
    }


    logout = e => {
        console.log("clicked");
        firebase.auth().signOut().then(function() {
            console.log("signout");
        }).catch((error) => {
            console.log("error");
            console.log(error);
        });
    }

    handleChange = (event, value) => {
        this.setState({ activeTab: value });
    };

    render() {

        return (
            <div>
                <AppBar position="static" color="#0e1417" className="appbar">
                    <Tabs className="main-tabs" value={this.state.activeTab} onChange={this.handleChange} centered>
                        <Tab label="Terminal" style={{ color: "#fff", fontSize: "12px" }}/>
                        <Tab label="Markets" style={{ color: "#fff", fontSize: "12px" }}/>
                        <Tab label="Stats" style={{ color: "#fff", fontSize: "12px" }}/>
                        <Tab label="Community" style={{ color: "#fff", fontSize: "12px" }}/>
                        <Button onClick={this.logout} style={{ color: "#fff", fontSize: "12px" }}>Logout</Button>
                    </Tabs>
                    {this.state.activeTab === 0 && (
                        <Forum />
                    )}
                    {this.state.activeTab === 1 && (
                        <TweetList />
                    )}
                    {this.state.activeTab === 2 && (
                        <Articles />
                    )}
                    {this.state.activeTab === 3 && (
                        <Forum />
                    )}
                </AppBar>
            </div>
      
        );
    }
}
export default Home