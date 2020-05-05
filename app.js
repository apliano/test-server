const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/teapot', (req, res) => {
  res.set('X-test-header', "Hey I'm a custom header");
  res.status(418);
  res.send('What a coincidance');
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
