const express = require('express');
const path = require('path');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));
const app = express();
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));
// //the first get won't run, since the '/' path will go the the static dir public
// app.get('', (req, res) => {
//   res.send('hello express');
// });

app.get('/about', (req, res) => {
  res.send({
    age: '27',
    name: 'benaya',
  });
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});
