import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
        {props.partsA.name} {props.partsA.exercises}
        </p> 
    )
}

const Content = (props) => {
    return (
        <div>
            <Part partsA={props.parts[0]} />
            <Part partsA={props.parts[1]} />
            <Part partsA={props.parts[2]} />
        </div>
    )
}

const Total = (props) => {
    let count = 0;
    count = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
    
    return (
        <div>
            <p>
            Number of exercises {count}
            </p>
        </div>
        
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>       
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


