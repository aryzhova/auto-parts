var express = require("express");
const data = require('./data');

const app = express();

app.get('/api/products', (req, res)=> {
  res.send(data.products);
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.listen(5000, () => {
  console.log('Serve at http://localhost:5000');
});