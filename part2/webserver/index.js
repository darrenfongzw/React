const express = require('express')
const app = express()
const morgan = require('morgan')
morgan.token('post', function (req, res) {
        return JSON.stringify(req.body)
    }
)
app.use(express.json())
// app.use(morgan('tiny'))
let persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    },
    {
        "name": "Darren",
        "number": "4555-322111",
        "id": 5
    }
]

app.get('/',morgan('tiny'), (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons',morgan('tiny'), (req, res) => {
    res.json(persons)
})

app.post('/api/persons', morgan('method::method | url::url status::status | contentLength::res[content-length] | responseTime::response-time ms | body::post'), (req, res) => {

    // console.log('inside api/persons\n', req.body)
    const body = req.body
    // console.log(body)
    if (!body || !body.name || !body.number) {
        return res.status(400).json({
            error: 'content missing'
        })
    }
    if (persons.find(person => person.name === body.name)) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    }

    const personx = {
        name: body.name,
        number: body.number,
        id: () => {
            return Math.floor(Math.random())
        },
    }
    persons.push(personx)
    res.status(200).end()
})

app.delete('/api/persons/:id',morgan('tiny'), (req, res) => {
    const id = Number(req.params.id)
    if (persons.find(person => person.id === id)) {
        persons = persons.filter(person => person.id !== id)
        return res.status(204).end()
    } else {
        return res.status(404).end()
    }
})

app.get('/api/persons/:id',morgan('tiny'), (req, res) => {
    const id = Number(req.params.id)
    const persons = persons.find(person => person.id === id)

    if (persons) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.get('/api/info',morgan('tiny'), (req, res) => {
    const date = new Date();
    res.send(`<p>Phonebook has info for ${persons.length} people<p><br/><p>${date}</p>`)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})