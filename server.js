/*
    This is the simple server we are starting out with in the project template
    Edit it to your needs, right now it really just serves up the index.html file
    from the dist/public directory
*/
const express = require('express');
const path = require('path');

var app = express();
var port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, 
    () => console.log(`Server started on port ${port}`));