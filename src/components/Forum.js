import React, { Component } from 'react';
import TweetList from "./TweetList";
import Headlines from "./Headlines";
import LongShort from './LongShort';
import TickerTape from "./TickerTape";
import TradingPlanWidget from "./TradingPlanWidget";
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import Journal from "./journal";


const styles = theme => ({
    grid: {
        width: '100%',
        height: '100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(1),
        color: '#fff',
        height: '100%',
        background: '#0e1417',
    },
    griditem: {
        height: '70vh',
        background: '#000',
    },
    griditem2: {
        height: '40vh',
        background: '#000',
    }
})

class Forum extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            width: "100%",
            height: "100%",
            colorTheme: "dark",
            currencyFilter: "USD,AUD,CAD,EUR,CHF,NZD,CNY,JPY,GBP",
            isTransparent: true,
            locale: "en",
            importanceFilter: "-1,0,1"
        });
        document.getElementById("tradingview-widget-container__widget").appendChild(script);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="main-forum">
                <Grid container spacing={1} className={classes.grid} alignItems="stretch">
                    <Grid item xs={12} md={9} className={classes.griditem}>
                        <Paper className={classes.paper}>
                            <div id="chart-widget">
                                <TradingViewWidget
                                    symbol="OANDA:GBPJPY"
                                    timezone="Etc/UTC"
                                    theme={Themes.DARK}
                                    locale="en"
                                    interval="240"
                                    autosize="true"
                                    style="1"
                                    hide_side_toolbar={false}
                                    allow_symbol_change="true"
                                    toolbar_bg="#f1f2f6"
                                    hidevolume="true"
                                    watchlist={
                                        ["OANDA:GBPJPY",
                                        "OANDA:XAUUSD",
                                        "OANDA:USDJPY",
                                        "OANDA:USDCAD",
                                        "OANDA:GBPUSD",
                                        "OANDA:EURUSD",
                                        "OANDA:AUDJPY",
                                        "OANDA:AUDUSD",
                                        "OANDA:EURJPY"]
                                    }
                                />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.griditem}>
                        <Paper className={classes.paper}>
                            <p style={{ fontSize: '17px', color: '#aaa', fontWeight: '800' }}>FX Headlines</p>
                            <div className="articles-widget">
                                <TweetList />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.grid} alignItems="stretch">
                    <Grid item xs={12} md={3} className={classes.griditem2}>
                        <Paper className={classes.paper}>
                            <p style={{ fontSize: '17px', color: '#aaa', fontWeight: '800' }}>Market Headlines</p>
                            <div className="market-headlines">
                                <Headlines />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.griditem2}>
                        <Paper className={classes.paper}>
                            <p style={{ fontSize: '17px', color: '#aaa', fontWeight: '800' }}>Long vs. Short</p>
                            <div className="longshort">
                                <LongShort />
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.griditem2}>
                        <Paper className={classes.paper}>
                            <p style={{ fontSize: '17px', color: '#aaa', fontWeight: '800' }}>Economic Calendar</p>
                            <div id="tradingview-widget-container__widget"></div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.griditem2}>
                        <Paper className={classes.paper}>
                            <div className="trading-plan">
                                <p style={{ fontSize: '17px', color: '#aaa', fontWeight: '800' }}>Trading Plan</p>
                                <TradingPlanWidget />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={1} className={classes.grid} alignItems="stretch">
                    <Grid item xs={12} md={3} className={classes.griditem2}>
                        <Paper className={classes.paper}>
                            Market Indices
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.griditem2}>
                        <Paper className={classes.paper}>
                            <Journal />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={3} className={classes.griditem2}>
                        <Paper className={classes.paper}>
                            Crypto
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

Forum.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Forum);
