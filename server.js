const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let tasks = [];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { task } = req.body;
  if (task) {
    tasks.push(task);
    res.status(201).json({ message: 'Tarefa adicionada' });
  } else {
    res.status(400).json({ message: 'Tarefa inválida' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});