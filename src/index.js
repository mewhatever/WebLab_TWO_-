const express = require('express');
const app = express();
const port = 3002;

const tasks = [
  { id: 1, title: 'Sample Task', completed: false }
];
app.locals.tasks = tasks;

app.use(express.json());

const tasksRouter = require('./routes/tasks');
app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('Task Manager API');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});






