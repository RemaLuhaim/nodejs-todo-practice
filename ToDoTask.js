
const express = require('express');
const mongoose = require('mongoose');
const todoController = require('./controllers/todoController');

const todo = express();

todo.use(express.urlencoded({ extended: true }));
todo.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/ToDo');

const Schema = mongoose.Schema({  title: String, description: String, date: Date
});//empty schema



todo.get('/createTask', todoController.getTask);

todo.post('/createTask', todoController.createTask);

todo.post('/update/:id', todoController.updateTask); //

todo.post('/delete/:id', todoController.deleteTask);

todo.listen(5575, () => {
    console.log('Server is running successfully on port number 5575');
});