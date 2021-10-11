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

 handleClickGood = e => {
        // this.setState({
        //     [e.currentTarget.name]: e.currentTarget.value
        // });
   
    // this.setState(prevState => ({
    //       //  [e.currentTarget.name]:  prevState.[e.currentTarget.name] +1
    //  [e.currentTarget.name]: prevState.good + 1
    //      }))
   this.setState(prevState => ({
     good: prevState.good + 1
         }))
 }

  handleClickNeutral = e => {
   this.setState(prevState => ({
    neutral: prevState.neutral + 1
         })) 
 }
  
  
 handleClickBad = e => {
   this.setState(prevState => ({
    bad: prevState.bad + 1
         })) 
 }


  render() {

     const { good, neutral, bad } = this.state;
     
        const countTotalFeedback = good + neutral + bad;
        const countPositiveFeedbackPercentage = Math.round(100*good/countTotalFeedback)

   
    return (

      <div>
          <h1>Please leave feedback</h1>
          
        <div>
          <button type="button" name="good" onClick={this.handleClickGood}> Good </button>
            <button type="button"  name="neutral" onClick={this.handleClickNeutral}> Neutral </button>
            <button type="button"  name="bad" onClick={this.handleClickBad}> Bad </button>

           {/* <button type="button"  value="good" name="good" onClick={this.increment}> Good </button>
            <button type="button" value="neutral" onClick={this.increment}> Neutral </button>
            <button type="button" value="bad" onClick={this.increment}> Bad </button> */}
          </div>

        <h2>Statistics</h2>
        <p>Good:  { good }</p>
        <p>Neutral: { neutral }</p>
        <p>Bad: { bad }</p>
        <p>Total: {countTotalFeedback} </p>
        <p>Positive feedback: {countPositiveFeedbackPercentage } % </p>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback }
          positivePercentage={countPositiveFeedbackPercentage } />
      </div>
    )
  }
}


export default App;
