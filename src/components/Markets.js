import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Forexfeed from "./Forexfeed.js";

class Markets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fxdata: {}
    };
  }

  render() {
    return (
      <div className="marketsdiv">
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Paper className="forexdiv">
              <h6 style={{ color: "white" }}>PAIRS</h6>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="stocksdiv">
              <h6 style={{ color: "white" }}>STOCKS</h6>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="indexdiv" backgroundColor="black">
              <h6 style={{ color: "white" }}>INDEXES</h6>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Markets;
