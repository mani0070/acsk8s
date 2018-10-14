'use strict';

const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('I am the Welcome app, used for the demo\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);