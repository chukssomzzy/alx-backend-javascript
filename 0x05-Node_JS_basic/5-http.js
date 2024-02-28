#!/usr/bin/node

const http = require('http');
const { URL } = require('url');
const countStudents = require('./3-read_file_async');

const dbUrl = process.argv[2];
const port = 1245;

const app = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  res.setHeader('Content-Type', 'Text/Plain');

  if (urlObj.pathname === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (urlObj.pathname === '/students' && dbUrl) {
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    countStudents(dbUrl)
      .then((studentList) => {
        res.write(studentList.join('\n'));
        res.end('');
      });
  }
});

app.listen(port);

module.exports = app;
