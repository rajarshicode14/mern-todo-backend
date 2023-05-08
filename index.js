const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
} = require('./controllers/todo.controller');

const app = express();
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 8000;
const connectionURL = process.env.MONGO_URI

mongoose.connect(connectionURL).then(() => {
    app.listen(port, () => { console.log("Running on port " + port) })
}).catch((err) => {
    console.log(err)
})


// GET
app.get('/todos', getTodo)

// CREATE
app.post('/todos', createTodo)

// UPDATE
app.put('/todos/:id', updateTodo)

// DELETE
app.delete('/todos/:id', deleteTodo)
