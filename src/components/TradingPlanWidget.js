import React, { useEffect, useState } from "react";
import TradingPlanForm from './TradingPlanForm';
import TradingPlanList from './TradingPlanList';

const LOCAL_STORAGE_KEY = 'react-trading-plan';

function TradingPlanWidget() {
    const [rules, setRules] = useState([]);

    useEffect(() => {
        const storageRules = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageRules) {
            setRules(storageRules);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(rules));
    }, [rules]);

    function addRule(rule) {
        setRules([rule, ...rules]);
    }

    function toggleComplete(id) {
        setRules(
            rules.map( rule => {
                if (rule.id == id) {
                    return {
                        ...rule,
                        completed: !rule.completed
                    };
                }
                return rule;
            })
        );
    }

    function removeRule(id) {
        setRules(rules.filter(rule => rule.id !== id));
    }

    return(
        <div className='trading-plan-rules'>
            <TradingPlanForm addRule={addRule} />
            <div className='trading-plan-container'>
                
                <TradingPlanList 
                    rules={rules}
                    toggleComplete={toggleComplete}
                    removeRule={removeRule}
                />
            </div>
        </div>

    );
}

export default TradingPlanWidget;