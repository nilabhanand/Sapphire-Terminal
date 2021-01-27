import React, { Component } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import TweetList from "./TweetList";
import Headlines from "./Headlines";
import TradingPlan from "./TradingPlan";
import Typography from "@material-ui/core/Typography";
import { ResizeProvider, ResizeConsumer } from "react-resize-context";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      size: {}
    };
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
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

  handleSizeChange = size => {
    this.setState({ size });
  };

  render() {
    return (

      <div id="main-dashboard">
        <div className="scroll-bar">
        </div>
        <div className="middle">
          <div className="left-column">
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
            <div className="articles-widget">
                
                <Headlines />
            </div>            
          </div>
          <div className="right-column">
              <div className="twitter-widget">
                <Typography variant="h3" style={{ color: "#fff", fontSize: "20px", padding: "10px" }}>FX HEADLINES</Typography>
                <div className="twitter-feed-component">
                  <TweetList />
                </div>
              </div>
              <div className="headlines-widget">
                  
                  <div id="tradingview-widget-container__widget"></div>
              </div>
          </div>
        </div>
        
        

      </div>
    );
  }
}

export default Dashboard;
