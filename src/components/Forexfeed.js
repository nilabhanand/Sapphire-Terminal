import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Forexview from "./Forexview.js";

class Forexfeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    fetch(
      "https://api.worldtradingdata.com/api/v1/forex?base=USD&api_token=uQhqzdKruA4YMX2WRkmvBYtjPe4C7HwAWLya5lUaa0RmYmUH4Kj8mch1x4uA"
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        //console.log(myJson);
        this.setState({
          data: myJson.data
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map((item, index) => (
          <Forexview base={item} />
        ))}
      </div>
    );
  }
}

export default Forexfeed;
