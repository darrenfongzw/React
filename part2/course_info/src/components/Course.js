import React from "react";

const Course = (props) => {
    console.log(props);
    return (
        <div>
            <Header name={props.course.name}/>
            <Content parts={props.course.parts}/>

        </div>
    )
};
const Header = (props) => {
    console.log(props);
    return (
        <h1>{props.name}</h1>
    )
};

const Content = (props) => {
    return (
        <>
            {props.parts.map((part) => <Part part={part.name} exercises={part.exercises}/>)}

            <Total parts={props.parts}/>
        </>
    )
};

const Total = (props) => {
    let total = props.parts.reduce((s, p) => {
        console.log("s : ", s);
        console.log("p : ", p);
        if (s.exercises) return s.exercises + p.exercises;
        return s + p.exercises;
    });

    return (
        <p>Number of exercises: {total}</p>
    )
};

const Part = (props) => {
    return (
        <>
            <p>{props.part} {props.exercises}</p>
        </>
    )
};
export default Course;