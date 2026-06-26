const express = require('express');
const app = express();
const port = 3002;

require('dotenv').config();

app.use(express.json());

const tasksRouter = require('./routes/tasks');

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('Task Manager API');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
