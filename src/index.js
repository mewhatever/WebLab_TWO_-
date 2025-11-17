const express = require('express');
const app = express();
const port = 3002;

const tasks = [
  { 
    id: 1, 
    title: 'Complete lab assignment', 
    completed: false,
    priority: 'high',
    createdAt: new Date('2025-11-10')
  },
  { 
    id: 2, 
    title: 'Study for midterm', 
    completed: true,
    priority: 'medium',
    createdAt: new Date('2025-11-12')
  },
  { 
    id: 3, 
    title: 'Build portfolio website', 
    completed: false,
    priority: 'low',
    createdAt: new Date('2025-11-14')
  },
  { 
    id: 4, 
    title: 'Practice REST APIs', 
    completed: false,
    priority: 'high',
    createdAt: new Date('2025-11-15')
  },
  { 
    id: 5, 
    title: 'Read documentation', 
    completed: true,
    priority: 'medium',
    createdAt: new Date('2025-11-16')
  }
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







