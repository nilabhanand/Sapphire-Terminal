import React, { Component } from "react";
import TweetList from "./TweetList";

class Tweets extends Component {
  render() {
    return (
      <div className="tweetsdiv">
        
        <TweetList />
        
      </div>
    );
  }
}

export default Tweets;
