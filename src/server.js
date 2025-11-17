const express = require('express');
const taskRouter = require('./routes/tasks');

const app = express();

const tasks = [
  { id: 1, title: 'Sample Task', completed: false }
];

app.locals.tasks = tasks;

app.use(express.json());
