const Task = require('../models/todoModel');

const getTask =  async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.render('todo', { tasks: tasks });
    }
    catch (err) {
        console.log(`There was an error: ${err}`);
    }
};

const createTask = async (req, res) => {
    try {
        const firstTask = new Task({
            title: req.body.title,
            description: req.body.description,
            date: new Date()
        });

        await firstTask.save();
        console.log('Task saved successfully');
        res.redirect('/createTask');
    }
    catch (err) {
        console.log(`There was an error: ${err}`);
    }
};

const updateTask = async (req, res) => {
    try {
        await Task.updateOne(
            { _id: req.params.id },
            {
                title: req.body.title,
                description: req.body.description
            }
        );

        console.log('Task updated successfully');
        res.redirect('/createTask');
    }
    catch (err) {
        console.log(`There was an error: ${err}`);
    }
};

const deleteTask = async (req, res) => {
    try {
        await Task.deleteOne({ _id: req.params.id });
        console.log('Task deleted successfully');
        res.redirect('/createTask');
    }
    catch (err) {
        console.log(`There was an error: ${err}`);
    }
};

module.exports = {
    getTask,
    createTask,
    updateTask,
    deleteTask
};