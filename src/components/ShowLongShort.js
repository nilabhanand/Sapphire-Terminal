import React, { Component } from 'react'

class ShowLongShort extends Component {
    render() {
        let data = this.props.data;

        return (
            <div>
                <h1 style={{ color: '#fff' }}>{data}</h1>
            </div>
        )
    }
}

export default ShowLongShort;
