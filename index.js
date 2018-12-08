const express = require('express');
const app = express();
const port = 8081;

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('home', { title: 'Hey', message: 'Hello there!' });
});

app.get('/course', function(req, res) {
  res.render('course', { title: 'course', message: 'Course page' });
});

app.get('/course/application', function(req, res) {
  res.render('application', {
    title: 'application',
    message: 'Application page'
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
