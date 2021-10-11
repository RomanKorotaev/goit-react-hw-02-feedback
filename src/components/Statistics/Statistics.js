import React, { Component } from 'react';
import s from './Statistics.module.css'
import PropTypes from 'prop-types';

// class Statistics extends Component {

//     render() {
//         return (
//             <div>
//                  <h2>Statistics</h2>
//         <p>Good:  { this.props.good }</p>
//         <p>Neutral: { this.props.neutral }</p>
//         <p>Bad: { this.props.bad }</p>
//         <p>Total: {this.props.countTotalFeedback} </p>
//         <p>Positive feedback: {this.props.countPositiveFeedbackPercentage}% </p>
//             </div>
//         )
//     }
//  }


function Statistics({ good, neutral, bad, totalFeedback, positiveFeedbackPercentage }) {

    // console.log('Statistics /  totalFeedback : ', totalFeedback);
    // console.log('Statistics /  positiveFeedbackPercentage : ', positiveFeedbackPercentage);
    
    return (
        <>
          <ul className={s.list}>
            <li className={s.item}>Good: {good}</li>
            <li className={s.item}>Neutral: {neutral}</li>
            <li className={s.item}>Bad: {bad}</li>
            <li className={s.item}>Total: { totalFeedback}</li>
            <li className={s.item}>Positive feedbacks: {positiveFeedbackPercentage} %</li>
          </ul>
      </>
    )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;