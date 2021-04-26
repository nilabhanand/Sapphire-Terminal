import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button } from "@material-ui/core";
import Markets from "./Markets";
import Tweets from "./Tweets";
import Dashboard from "./Dashboard";
import TweetList from "./TweetList";
import Forum from "./Forum";
import Typography from "@material-ui/core/Typography";
import firebase from "firebase/app";
import "firebase/auth";
import Toolbar from '@material-ui/core/Toolbar';
import Modal from 'react-modal';
import TabPanel from '@material-ui/lab/TabPanel';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.settings = this.settings.bind(this);
        this.state = {
            activeTab: 0,
            settingsTab: 0,
            showing: true,
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }
      
    handleCloseModal () {
        this.setState({ showModal: false });
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

    settings = e => {
        console.log("settings clicked");
    }

    handleChange = (event, value) => {
        this.setState({ activeTab: value });
    };

    handleSettingsChange = (event, value) => {
        this.setState({ settingsTab: value });
    };
    render() {
        const { showing } = this.state;
        return (
            <div>
                <AppBar position="static" color="#0e1417" className="appbar">
                    <Tabs className="main-tabs" value={this.state.activeTab} onChange={this.handleChange} variant="fullWidth">
                        <Tab label="Terminal" style={{ color: "#fff", fontSize: "12px" }}/>
                        <Tab label="Stats" style={{ color: "#fff", fontSize: "12px" }}/>
                        <Tab label="Community" style={{ color: "#fff", fontSize: "12px" }}/>
                        <Toolbar>
                            <Button onClick={this.logout} style={{ color: "#fff", fontSize: "12px"}}>Logout</Button>
                            <Button onClick={this.handleOpenModal} style={{ color: "#fff", fontSize: "12px"}}>Settings</Button>
                            <Modal 
                                style={{
                                    content: {
                                        backgroundColor: 'black',
                                        width: '40%',
                                        height: "60%",
                                        top: "50%",
                                        left: "50%",
                                        right: 'auto',
                                        bottom: 'auto',
                                        marginRight: '-50%',
                                        transform: 'translate(-50%, -50%)'
                                    }
                                }} 
                                isOpen={this.state.showModal} 
                                contentLabel="Minimal Modal Example"
                                centered
                            >
                                <div className="settings-modal">
                                    <Tabs className="main-tabs" value={this.state.settingsTab} onChange={this.handleSettingsChange} variant="fullWidth">
                                        <Tab label="User Settings" style={{ color: "#fff", fontSize: "12px" }}/>
                                        <Tab label="Account" style={{ color: "#fff", fontSize: "12px" }}/>
                                        <Tab label="Payment & Billing" style={{ color: "#fff", fontSize: "12px" }}/>
                                        <Tab label="Notifications" style={{ color: "#fff", fontSize: "12px" }}/>
                                        <Toolbar>
                                            <Button onClick={this.handleCloseModal} style={{ color: "#fff", fontSize: "12px"}}>X</Button>
                                        </Toolbar>
                                    </Tabs>
                                   
                                </div>
                            </Modal>
            
                        </Toolbar>
                    </Tabs>
                    {this.state.activeTab === 0 && (
                        <Forum />
                    )}
                    {this.state.activeTab === 1 && (
                        <Markets />
                    )}
                    {this.state.activeTab === 2 && (
                        <Markets />
                    )}
                    {this.state.activeTab === 3 && (
                        <Markets />
                    )}
                </AppBar>
            </div>
      
        );
    }
}
export default Home