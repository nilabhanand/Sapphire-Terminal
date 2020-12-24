import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import ArticleView from "./ArticleView.js";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  //grabs articles from bloomberg and reuters for anything finance
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=business&sources=bloomberg,reuters&pageSize=50&sortBy=publishedAt&apiKey=0408b920ec5a46129521f0962a55a363"
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        this.setState({
          articles: myJson.articles
        });
      });
  }

  render() {
    return (
      <div className="articlesfeed">
        {this.state.articles.map((item, index) => (
          <ArticleView article={item} />
        ))}
      </div>
    );
  }
}

export default Feed;
