#!/usr/bin/node

const { readFileSync } = require('fs');
const http = require('http');
const { URL } = require('url');

const dbUrl = process.argv[2];
const port = 1245;
const fieldIdx = 3;
const values = 4;
const studentName = 0;

function readCSV() {
  const fileCont = readFileSync(dbUrl, { encoding: 'utf-8' });
  let students = 0;
  const studentsByField = {};

  for (const line of fileCont.split('\n').slice(1)) {
    const splitLine = line.split(',');
    if (splitLine.length === values) {
      students += 1;

      if (studentsByField[splitLine[fieldIdx]]) {
        studentsByField[splitLine[fieldIdx]].push(splitLine[studentName]);
      } else {
        studentsByField[splitLine[fieldIdx]] = [splitLine[studentName]];
      }
    }
  }
  return [studentsByField, students];
}
const app = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  res.setHeader('Content-Type', 'Text/Plain');

  if (urlObj.pathname === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (urlObj.pathname === '/students' && dbUrl) {
    const [studentsByField, students] = readCSV();
    let i = 0;

    res.write('This is the list of our students\n');
    res.write(`Number of students: ${students}\n`);
    for (const [fields, students] of Object.entries(studentsByField)) {
      i += 1;

      res.write(`Number of students in ${fields}: ${students.length}. List: ${students.join(', ')}`);
      if (i < Object.keys(studentsByField).length) {
        res.write('\n');
      }
    }
  }
  res.end();
});

app.listen(port);

module.exports = app;
