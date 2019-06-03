'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
   res.send('Welcome To Nodejs version App :)');
});

app.get('/version', (req, res) => {
   var version = process.versions["node"];
   res.send('Node version is: ' + version);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);