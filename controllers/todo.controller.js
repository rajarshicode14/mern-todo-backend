const mongoose = require('mongoose');
const Todos = require('../schema.js')

const getTodo = async (req, res) => {
    const result = await Todos.find({}).sort({ createdAt: -1 })
    res.status(200).send(result)
}

const createTodo = async (req, res) => {
    const dbTodo = req.body;
    const newTodo = await Todos.create(dbTodo);
    res.status(201).send(newTodo);
}

const updateTodo = async (req, res) => {
    const { id } = req.params;
    const todoId = { _id: id }
    const update = { completed: true }

    const updateTodo = await Todos.findOneAndUpdate(todoId, update)

    if (!updateTodo) {
        return res.send("Error updating")
    }
    res.status(200).send(updateTodo)
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    const deleteTodo = await Todos.findOneAndDelete({ _id: id })
    res.status(200).send(deleteTodo)
}
module.exports = {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
}