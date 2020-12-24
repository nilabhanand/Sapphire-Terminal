import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";

class Forexview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography variant="h6" color="secondary" gutterBottom>
              {this.props.base}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Typography variant="caption" className="content" gutterBottom>
                {this.props.data}
              </Typography>
              <br />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Forexview;
