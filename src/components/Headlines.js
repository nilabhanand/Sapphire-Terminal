import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import socketIOClient from "socket.io-client";
import HeadlinesStream from './HeadlinesStream';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

class Headlines extends Component {
    constructor() {
        super();
        this.state = {
            headlinesArray: []
        }
    }
    
    componentDidMount() {
        //const io = require('socket.io-client');
        const arr = [];
        const new_arr = [];
        const io = require('socket.io-client');
        const apikey = "lk2adenzaaxko9sjfzipssiw4ikdejirhtiebeiudeobph0hvgkjaog5braozeof";
        const socket = io.connect('http://stream.newsfilter.io?apiKey=' + apikey);

        socket.on('connect', () => {
            console.log('connected');
            
            socket.on('articles', articles => {
                for(var i = 0; i < articles.articles.length; i++) {
                    arr.unshift(articles.articles[i]);
                    
                }
                this.setState({ headlinesArray: arr });
                //console.log("headline array: ")
                //console.log(this.state.headlinesArray)
            });
        });
    
    }
    render() {
        let headlinesArray = this.state.headlinesArray;
        //this.state.headlines[i]
        let articlesCard = <TransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {headlinesArray.map((x, i) =>
                <HeadlinesStream key={i} data={x} />
            )}
        </TransitionGroup>;

        let loading = <div>

        </div>

        return (
            <div className="headlines-stream">
                    <div>
                        {
                            headlinesArray.length > 0 ? articlesCard : loading
                        }   
                    </div>
            </div>
        )
    }
}

export default Headlines;