import React, { Component } from 'react'

class HeadlinesStream extends Component {
    render() {
        let data = this.props.data;

        return (
            <div>
                <div className="card-panel grey lighten-5 z-depth-3 hoverable thin">
                    <div className="row valign-wrapper left-align chip hoverable">
                        <p style={{ fontSize: "13px", color: "#21edd9" }}>{data.source.name}</p>
                    </div>
                    <div className="row valign-wrapper left-align chip hoverable">
                        <p style={{ fontSize: "12px"}}>{data.publishedAt}</p>
                    </div>
                    <div className="row valign-wrapper left-align chip hoverable">
                        <p style={{ fontSize: "12px"}}>[{data.title}]</p>
                    </div>
                    <br></br>
                </div>

            </div>
        );
    }
}

export default HeadlinesStream;
