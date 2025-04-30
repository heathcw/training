
const express = require('express'); 
const app = express(); 
// Middleware to parse JSON bodies 
app.use(express.json()); 
// Example data (In a real-world scenario, this would come from a database)
let todos = [ { id: 1, task: 'Learn backend development', completed: false }, 
    { id: 2, task: 'Build an API', completed: false } ];

// Route to get all todos 
app.get('/todos', (req, res) => { res.status(200).json(todos); }); 

// Route to create a new todo 
app.post('/todos', (req, res) => { const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }
  const newTodo = { id: todos.length + 1, task, completed: false }; 
  todos.push(newTodo);
  res.status(201).json(newTodo); 
});

// Start the server 
const port = 3000; 
app.listen(port, () => { console.log(`Server is running on http://localhost:${port}`); });