import React, { Component, useState } from 'react'
import { withStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ShowLongShort from './ShowLongShort';
import { PieChart } from 'react-minimal-pie-chart';


const styles = theme => ({
    formControl: {
        margin: '10px',
        width: '90%',
    },
    selectEmpty: {
        marginTop: '2px',
    },
    inputLabel: {
        color: '#fff',
        borderBottomColor: '#fff',
    }, 
    select: {
        color: '#fff',
        width: '100%',
        "&:before": {
            // normal
            borderBottom: "1px solid #02a2f7"
            //borderBottom: "1px solid #21edd9"
          },
          "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
            // hover
            //borderBottom: `1px solid #02a2f7`
            borderBottom: "1px solid #21edd9"
          }
    }
})

const defaultLabelStyle = {
    fontSize: '9px',
    fill: 'white',
    fontFamily: 'sans-serif',
  
};

class LongShort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pair: 'XAU/USD',
            long: 66.94,
            short: 33.1,
            xagusd: [25.59, 74.70],
            xauusd: [33.1, 66.94],
            usdcad: [38.35, 61.65],
            eurusd: [39.03, 60.97],
            audusd: [39.84, 60.16],
            eurgbp: [40.68, 59.33],
            usdjpy: [40.82, 59.19],
            usdchf: [41.68, 58.62],
            gbpchf: [49.31, 50.69],
            eurjpy: [42.54, 57.46],
            gbpjpy: [42.56, 57.43],
            gbpusd: [42.27, 57.73],
            euraud: [44.32, 55.66],
            nzdusd: [43.17, 56.66]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, index, value) => {
        //console.log(event.target.value);
        var newPair = event.target.value;
        //this.setState({ pair: newPair }, () => {
            if (newPair === 0) {
                this.setState({ short: this.state.xauusd[0], long: this.state.xauusd[1] })
                //console.log(this.state.xauusd[0], this.state.xauusd[1]);
            }else if (newPair == 1) {
                this.setState({ short: this.state.xagusd[0], long: this.state.xagusd[1] })
            }else if (newPair == 2) {
                this.setState({ short: this.state.eurusd[0], long: this.state.eurusd[1] })
            }else if (newPair == 3) {
                this.setState({ short: this.state.gbpusd[0], long: this.state.gbpusd[1] })
            }else if (newPair == 4) {
                this.setState({ short: this.state.nzdusd[0], long: this.state.nzdusd[1] })
            }else if (newPair == 5) {
                this.setState({ short: this.state.audusd[0], long: this.state.audusd[1] })
            }else if (newPair == 6) {
                this.setState({ short: this.state.usdcad[0], long: this.state.usdcad[1] })
            }else if (newPair == 7) {
                this.setState({ short: this.state.usdjpy[0], long: this.state.usdjpy[1] })
            }else if (newPair == 8) {
                this.setState({ short: this.state.usdchf[0], long: this.state.usdchf[1] })
            }else if (newPair == 9) {
                this.setState({ short: this.state.gbpjpy[0], long: this.state.gbpjpy[1] })
            }else if (newPair == 10) {
                this.setState({ short: this.state.eurjpy[0], long: this.state.eurjpy[1] })
            }else if (newPair== 11) {
                this.setState({ short: this.state.eurgbp[0], long: this.state.eurgbp[1] })
            }else if (newPair == 12) {
                this.setState({ short: this.state.euraud[0], long: this.state.euraud[1] })
            }else if (newPair == 13) {
                this.setState({ short: this.state.gbpchf[0], long: this.state.gbpchf[1] })
            }
        //}); 
        
    }
    render() {
        const { classes } = this.props;
        
        return (
            <div className="longshortcontainer">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>Select Currency</InputLabel>
                    <Select
                        className={classes.select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={this.state.pair}
                        onChange={this.handleChange}
                    >
                        <MenuItem value={0}>XAU/USD</MenuItem>
                        <MenuItem value={1}>XAG/USD</MenuItem>
                        <MenuItem value={2}>EUR/USD</MenuItem>
                        <MenuItem value={3}>GBP/USD</MenuItem>
                        <MenuItem value={4}>NZD/USD</MenuItem>
                        <MenuItem value={5}>AUD/USD</MenuItem>
                        <MenuItem value={6}>USD/CAD</MenuItem>
                        <MenuItem value={7}>USD/JPY</MenuItem>
                        <MenuItem value={8}>USD/CHF</MenuItem>
                        <MenuItem value={9}>GBP/JPY</MenuItem>
                        <MenuItem value={10}>EUR/JPY</MenuItem>
                        <MenuItem value={11}>EUR/GBP</MenuItem>
                        <MenuItem value={12}>EUR/AUD</MenuItem>
                        <MenuItem value={13}>GBP/CHF</MenuItem>
                    </Select>
                    
                </FormControl>
                <div className="space"></div>
                <div className='piechart'>
                   
                        <PieChart
                            animate
                            animationDuration={500}
                            animationEasing="ease-out"
                            center={[50, 50]}
                            data={[
                                { title: this.state.long + '%', value: this.state.long, color: '#21edd9' },
                                { title: this.state.short+ '%', value: this.state.short, color: '#02a2f7' },
                            ]}
                            lengthAngle={360}
                            lineWidth={20}
                            paddingAngle={0}
                            radius={50}
                            startAngle={0}
                            viewBoxSize={[100, 100]}
                            label={(data) => data.dataEntry.title}
                            labelPosition={45}
                            labelStyle={{
                            ...defaultLabelStyle,
                            }}
                        />
                        <div className="space"></div>
                        <div className="legend">
                            <p>Long: <span className="longspan"></span></p>
                            <p>Short: <span className="shortspan"></span></p>
                        </div>
                    
                
                </div>
            </div>
        )
    }
}

LongShort.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LongShort);