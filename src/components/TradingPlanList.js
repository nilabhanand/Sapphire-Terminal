import React from "react";
import TradingPlanRule from "./TradingPlanRule";
import { List } from "@material-ui/core";

function TradingPlanList( { rules, toggleComplete, removeRule } ) {
    return(
        <List>
            {rules.map(rule => (
                <TradingPlanRule
                    key={rule.id}
                    rule={rule}
                    removeRule={removeRule}
                    toggleComplete={toggleComplete}
                />
            ))}
        </List>
    );
}

export default TradingPlanList;