const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(Example app listening on port ${port})
//})
// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 5002;


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // To handle form data

let tasks = []; // In-memory task list

// Show ToDo list page
app.get('/', (req, res) => {
res.render('todo', { tasks: tasks });
});


// Add task
app.post('/add', (req, res) => {
const task = req.body.task;
if (task) tasks.push(task);
res.redirect('/');
});

// Delete task
app.post('/delete', (req, res) => {
    const taskToDelete = req.body.task;
    const index = tasks.indexOf(taskToDelete);
    if (index > -1) {
      tasks.splice(index, 1);
    }
    res.redirect('/');
  });
 
  
// Server start
app.listen(port, () => {
console.log ('Server is running on http://localhost:${port}');
});