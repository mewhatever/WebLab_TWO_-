const express = require('express');
const app = express();
const port = 3002;

const tasksRouter = require('./routes/tasks');

app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

app.use('/tasks', tasksRouter);
app.use('/task', tasksRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
