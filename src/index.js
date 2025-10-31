const express = require('express');
const app = express();
const port = 3002;

const tasks = [
  { 
    id: 1, 
    title: 'Learn Node.js', 
    completed: false,
    priority: 'high',
    createdAt: new Date('2025-10-01')
  },
  { 
    id: 2, 
    title: 'Build REST API', 
    completed: false,
    priority: 'medium',
    createdAt: new Date('2025-10-05')
  },
  { 
    id: 3, 
    title: 'Study Express Router', 
    completed: true,
    priority: 'high',
    createdAt: new Date('2025-10-10')
  },
  { 
    id: 4, 
    title: 'Test with Postman', 
    completed: false,
    priority: 'low',
    createdAt: new Date('2025-10-15')
  },
  { 
    id: 5, 
    title: 'Deploy Application', 
    completed: false,
    priority: 'medium',
    createdAt: new Date('2025-10-20')
  }
];

app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/health', (req, res) => {
       res.json({
         status: 'healthy',
         uptime: process.uptime()
       });
});


app.get('/task/:id', (req, res) => {
       const taskId = parseInt(req.params.id);
       const task = tasks.find(t => t.id === taskId);
       
       if (!task) {
         return res.status(404).json({ error: 'Task not found' });
       }
       
       res.json(task);
});
     
     
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
