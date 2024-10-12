// app.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log(`Received request for: ${req.method} ${req.url}`);
    next();
});

// Define routes
app.get('/', (req, res) => {
    res.render('index'); // Renders index.ejs
});

app.get('/background', (req, res) => {
    res.render('background'); // Renders background.ejs
});

app.get('/jobs', (req, res) => {
    res.render('jobs'); // Renders jobs.ejs
});

app.get('/projects', (req, res) => {
    res.render('projects'); // Renders projects.ejs
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});