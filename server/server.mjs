//  import the packages to use
import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'

// set up middleware
const app = express()
app.use(bp.urlencoded({extended: true}))
app.use(bp.json())
app.use(morgan('dev'))

// set up database
const db = []

// create routes
app.post('/todo', (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
    }

    db.push(newTodo)
    res.json(newTodo)
})

// to show all the todos
app.get('/todo', (req, res) => {
    res.json(db)
})

// start server
app.listen(8000, () => {
    console.log('Server running at https://localhost:8000')
})