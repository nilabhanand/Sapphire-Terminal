import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

import {withStyles} from '@material-ui/core/styles'
import Link from "@material-ui/core/Link";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";

const useStyles = withStyles({
  expansionpanel: {
    background: 'none',
    color: "#fff",
  },
});

class ArticleView extends Component {
  
  constructor(props) {
    super(props);
    
  }
  render() {
    const {classes} = this.props;
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography variant="h6" color="secondary" gutterBottom>
              {this.props.article.title}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Link className="link" href={this.props.article.url}>
              <div>
                <Typography variant="caption" className="content" gutterBottom>
                  {this.props.article.description
                    ? this.props.article.description
                    : this.props.article.title}
                </Typography>
                <br />
              </div>
            </Link>
          </ExpansionPanelDetails>
        </ExpansionPanel>    
        
      </div>
    );
  }
}

export default ArticleView;
