import React, { Component } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

class Charts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="myContainer2">
        <TradingViewWidget
          symbol="OANDA:GBPJPY"
          timezone="Etc/UTC"
          theme={Themes.DARK}
          locale="en"
          interval="240"
          width="900"
          height="500"
          style="1"
          hide_side_toolbar="false"
          allow_symbol_change="true"
          toolbar_bg="#f1f2f6"
          hide_side_toolbar="true"
          watchlist={
            ("OANDA:GBPJPY",
              "OANDA:XAUUSD",
              "OANDA:USDJPY",
              "OANDA:USDCAD",
              "OANDA:GBPUSD",
              "OANDA:EURUSD",
              "OANDA:AUDJPY",
              "OANDA:AUDUSD",
              "OANDA:EURJPY")
          }
        />
      </div>
    );
  }
}

export default Charts;
