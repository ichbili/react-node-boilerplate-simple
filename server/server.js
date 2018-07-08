const express = require('express');
const path = require('path');

console.log('Server started');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build/static/index.html'));
  });

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build/static')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build/static/index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));