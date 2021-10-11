import React, { Component } from 'react';
import s from './Statistics.module.css'

class Statistics extends Component {

    render() {
        return (
            <div>
                 <h2>Statistics</h2>
        <p>Good:  { this.props.good }</p>
        <p>Neutral: { this.props.neutral }</p>
        <p>Bad: { this.props.bad }</p>
        <p>Total: {this.props.countTotalFeedback} </p>
        <p>Positive feedback: {this.props.countPositiveFeedbackPercentage}% </p>
            </div>
        )
    }
 }


export default Statistics;  