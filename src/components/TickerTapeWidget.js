import React, { Component } from 'react'

class TickerTapeWidget extends Component {
    state = {
        loading: true
    };

    async componentDidMount() {
        const url = "http://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=0408b920ec5a46129521f0962a55a363";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    render() {
        return (
            <div>
                {this.state.loading ? <div>loading...</div> : <div>data...</div>}        
            </div>
        )
    }
}

export default TickerTapeWidget;