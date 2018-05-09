const express = require('express');
const path = require('path');

var app = express();
var port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'dist', 'public')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, 
    () => console.log(`Server started on port ${port}`));