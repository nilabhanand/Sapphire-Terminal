import React, { Component } from "react";

class CardComponent extends Component {
    render() {
        let data = this.props.data;

        return (
            <div className='market-headlines-component'>
                <div className="card-panel grey lighten-5 z-depth-3 hoverable thin">
                
                    <div className="row valign-wrapper left-align chip hoverable" >
                        <p style={{ fontSize: "13px", color: "#21edd9" }}>[{new Date(data.created_at).toLocaleTimeString()}]</p>
                        
                    </div>
                    <div className="row valign-wrapper left-align chip hoverable">
                        <p style={{ fontSize: "13px" }}> <span style={{ color: "#fff" }}>{data.text}</span></p>
                    </div>
                    <br></br>
                </div>

            </div>
        );
    }
}

export default CardComponent;