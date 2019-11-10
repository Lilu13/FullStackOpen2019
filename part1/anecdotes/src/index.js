import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [theMostVoted, setTheMost] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(8)).map(Number.prototype.valueOf,0))
  
  const getRandomNumber = () => {
      setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)))
  }

  for (let i=0; i<=points.length; i++) {
    if (points[i] > points[theMostVoted]) {
      setTheMost(i)
    }
  }
    
  const getVotes = (selected) => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

    return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        <p>{props.anecdotes[selected]} </p>
        <p>has {points[selected]} votes</p>
      </div>
      <p>
        <button onClick={() => getVotes(selected)}>vote</button>
        <button onClick={() => getRandomNumber()}>next anecdote</button>
      </p>
      <h1>Anecdote with the most votes</h1>
      <div>
        <p>{props.anecdotes[theMostVoted]} </p>
        <p>has {points[theMostVoted]} votes</p>
      </div>
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Prolific programmers contribute to certain disaster.',
  'It`s OK to figure out murder mysteries, but you shouldn`t need to figure out code. You should be able to read it.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)