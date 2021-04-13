const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
//define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup handlabars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
//setup static location to serve
app.use(express.static(publicDirectoryPath));
app.get('', (req, res) => {
  res.render('index', {
    title: 'this is the main page title',
    name: 'Benaya Trabelsi',
  });
});
app.get('/raw-html', (req, res) => {
  res.render('raw-html', {
    title: 'this is the raw-html page',
    name: 'Benaya Trabelsi',
  });
});
app.get('/help', (req, res) => {
  res.render('raw-html', {
    title: 'help page',
    name: 'Benaya Trabelsi',
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    message: 'this is the wrong help page',
    name: 'Benaya Trabelsi',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    message: 'this is my 404 error page',
    name: 'Benaya Trabelsi',
  });
});
app.listen(3000, () => {
  console.log('server is up on 3000');
});
