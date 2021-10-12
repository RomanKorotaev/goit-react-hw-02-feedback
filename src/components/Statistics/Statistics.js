import React from 'react';
import s from './Statistics.module.css'
import PropTypes from 'prop-types';


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
  positivePercentage: PropTypes.number,
};

export default Statistics;