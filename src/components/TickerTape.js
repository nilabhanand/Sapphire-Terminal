import React, { Component } from 'react'

class TickerTape extends Component {
    constructor(props) {
        super(props);
        this.myRed = React.createRef();
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [
                {
                    proName: "FOREXCOM:SPXUSD",
                    title: "S&P 500"
                },
                {
                    proName: "FOREXCOM:NSXUSD",
                    title: "Nasdaq 100"
                },
                {
                    proName: "OANDA:XAUUSD",
                    title: "XAUUSD"
                },
                {
                    proName: "OANDA:GBPJPY",
                    title: "GBPJPY"
                },
                {
                    proName: "OANDA:GBPUSD",
                    title: "GBPUSD"
                },
                {
                    proName: "OANDA:USDCAD",
                    title: "USDCAD"
                },
                {
                    proName: "OANDA:AUDUSD",
                    title: "AUDUSD"
                },
                {
                    proName: "BITSTAMP:BTCUSD",
                    title: "BTCUSD"
                }
            ],
            showSymbolLogo: false,
            colorTheme: "dark",
            isTransparent: true,
            displayMode: "adaptive",
            local: "en"
        });
        document.getElementById("tickerdiv").appendChild(script);
    }
    render() {
        return (
            <div id="tickerdiv">
                      
            </div>
        )
    }
}

export default TickerTape;