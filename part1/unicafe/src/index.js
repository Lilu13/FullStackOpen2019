import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
    <button onClick={onClick}>{text}</button>
)

const Statistics = (props) => {
    if (props.all === 0)  {
        return (
            <div> No feedback given</div>
        );
    }  
    let average = (props.good-props.bad)/props.all
    let positive = props.good/props.all*100
    return (
        <table>
            <Statistic text="good" value={props.good} />
            <Statistic text="neutral" value={props.neutral} />
            <Statistic text="bad" value={props.bad} />
            <Statistic text="all" value={props.all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive}  />
        </table>
    )
}

const Statistic = ({text, value}) => {
    if (text !== 'positive'){
        return (
            <tbody> 
                <tr>
                    <td>{text}</td>
                    <td>{value}</td>
                </tr>
            </tbody>
        )
    }
    return ( 
        <tbody>
            <tr>
                <td>{text}</td>
                <td>{value} %</td>
            </tr>
        </tbody>
    )
}
 

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedbacks, setAll] = useState(0)

  const handleGood = () => {
      setAll(allFeedbacks + 1)
      setGood(good + 1)
  }
  const handleNeutral = () => {
      setAll(allFeedbacks + 1)
      setNeutral(neutral + 1)
  }
  const handleBad = () => {
      setAll(allFeedbacks + 1)
      setBad(bad + 1)
  }


  return (
    <div>
        <h1>give feedback</h1>
        <Button onClick={handleGood} text='good' />
        <Button onClick={handleNeutral} text='neutral' />
        <Button onClick={handleBad} text='bad' />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} all={allFeedbacks} bad={bad} />    
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
