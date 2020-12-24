import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    textField: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        color: '#fff'
    },
    input: {
        color: 'white',
        '&:before': {
            borderBottomColor: '#02a2f7',
        },
        '&:after': {
            borderBottomColor: '#21edd9',
        },
        '&:hover:before': {
            borderBottomColor: ['#21edd9', '!important'],
        }
    }
});

function TradingPlanForm({ addRule }) {
    const classes = useStyles();

    const [rule, setRule] = useState({
        id: '',
        task: '',
        completed: false
    });

    function handleTaskInputChange(e) {
        setRule({ ...rule, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (rule.task.trim()) {
            addRule( { ...rule, id: uuidv4() } );
            //reset rule input
            setRule( { ...rule, task: "" } );
        }
    }
    return (
        <form className='trading-plan-form' onSubmit={handleSubmit}>
            <TextField className={classes.textField} label="Trading Rule" name="task" type="text" value={rule.task} onChange={handleTaskInputChange} InputProps={{ className: classes.input,}} />
            <Button type="submit" style={{ color: "#fff", fontSize: "12px" }}>Submit</Button>
        </form>
    );
}

export default TradingPlanForm;
