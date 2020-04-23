import React, {useEffect, useState} from 'react'
import AddNew from "./components/Addnew";
import NumbersList from "./components/NumbersList";
import Filter from "./components/Filter";
import axios from 'axios';

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')

    const [newFilter, setNewFilter] = useState('')
    const [newNumber, setNewNumber] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('Promise fulfilled')
                setPersons(response.data)
            })
    },[])

    const addPerson = (event) => {
        //check if the name already exists

        event.preventDefault();
        console.log(persons, newName, newNumber)

        if (persons.filter(person => person.name === newName).length > 0) {
            //name already exists
            setNewName('');
            window.alert(`${newName} is already added to phonebook`)
            return
        } else {
            setPersons(persons.concat({name: newName, number: newNumber}))
            setNewName('')
            setNewNumber('')
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter handleFilterChange={handleFilterChange} newFilter={newFilter}/>
            <AddNew onSubmit={addPerson}
                    valueName={newName}
                    onChangeName={handleNameChange}
                    valueNo={newNumber}
                    onChangeNo={handleNumberChange}
            />
            <NumbersList newFilter={newFilter} persons={persons}/>
        </div>
    )
}

export default App