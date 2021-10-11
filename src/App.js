// import logo from './logo.svg';
// import logo from './coffeeCup.png'
import './App.css';
import React, { Component } from 'react';
import Statistics from './components/Statistics'

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
}


// Общий обработчик для нескольких разных кнопок
  handleFeedback = (e) => {
    const { name } = e.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  

  // Подсчитываем общую сумму
  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (good + neutral + bad);
  };


// Высчитываем пропрорцию (процент) позитивных откликов
  positiveFeedbackPercentage = () => {
    return Math.round(this.state.good * 100 / this.totalFeedback());
  }



  render() {

    const { good, neutral, bad } = this.state;
    const { handleFeedback, totalFeedback, positiveFeedbackPercentage } = this;
        
    return (

      <div>
          <h1>Please leave feedback</h1>
          
        <div>
            <button type="button" name="good" onClick={this.handleFeedback}> Good </button>
            <button type="button"  name="neutral" onClick={this.handleFeedback}> Neutral </button>
            <button type="button"  name="bad" onClick={this.handleFeedback}> Bad </button>
          </div>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback()}
          positiveFeedbackPercentage={positiveFeedbackPercentage() } />
      </div>
    )
  }
}


export default App;
