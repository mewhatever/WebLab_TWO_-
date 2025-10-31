const express = require('express');
const router = express.Router();

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

router.get('/', (req, res) => {
  res.json(tasks);
});

router.get('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  
  if (isNaN(taskId)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  
  const task = tasks.find(t => t.id === taskId);
  
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  
  res.json(task);
});

module.exports = router;
