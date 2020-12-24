import React, { Component } from "react";
import Feed from "./Feed";

class Articles extends Component {
  render() {
    return (
      <div className="articlesdiv">
        <h1>Economic News</h1>
        <br />
        <Feed />
      </div>
    );
  }
}

export default Articles;
