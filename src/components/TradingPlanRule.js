import React, { Component } from 'react';
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function TradingPlanRule( { rule, toggleComplete, removeRule }) {

    function handleCheckBoxClick() {
        toggleComplete(rule.id);
    }

    function handleRemoveClick() {
        removeRule(rule.id);
    }

    return(
        <ListItem style={{ display: 'flex', color: 'white', height: '40px' }}>
            
            <Typography
                variant="body1"
                style = {{textDecoration: rule.completed ? "line-through" : null, fontSize: '12px'}}
            >
                {rule.task}
            </Typography>
            <IconButton onClick={handleRemoveClick} style={{ color: "#fff"}}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    )
}

export default TradingPlanRule;