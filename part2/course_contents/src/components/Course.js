import React from 'react';

const Course = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Part course={props.course} />
      <Total course={props.course} />
    </div>
  )
}

const Header = (props) => <h3>{props.course.name}</h3>

const Part = (props) => 
  props.course.parts.map(part => 
  <div key={part.id}>
    {part.name} {part.exercises}
  </div>)

const Total = (props) => {
  let totalAmount = props.course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>total of {totalAmount} exercises</p>
  )
}

export default Course