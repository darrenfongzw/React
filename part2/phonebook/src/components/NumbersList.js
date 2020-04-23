import React from "react";

const NumbersList = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Numbers</h2>

            {props.persons
                .filter(person => person.name.toLowerCase().includes(props.newFilter.toLowerCase()))
                .map(person => <div>Name: {person.name}, Number: {person.number}</div>)
            }
        </div>
    )
};

export default NumbersList;