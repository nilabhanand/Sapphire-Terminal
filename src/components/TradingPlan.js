import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";
import { Button, TextField } from "@material-ui/core";

class TradingPlan extends Component {
    render() {
        return (
            <div>
                <TextField label="Task" name="task" type="text" style={{ width: "500px" }}/>
                <Button type="submit" style={{ color: "#fff", fontSize: "20px" }}>Submit</Button>
            </div>
        )
    }
}

export default TradingPlan
