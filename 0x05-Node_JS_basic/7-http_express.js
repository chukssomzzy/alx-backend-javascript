#!/usr/bin/node

const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;
const dbUrl = process.argv[2];
const fieldIdx = 3;
const values = 4;
const fieldItr = 0;

function readCSVAsnc() {
  return new Promise((resolve, reject) => {
    readFile(dbUrl, { encoding: 'utf-8' }, (err, data) => {
      let students = 0;
      const studentsByField = {};
      if (err) {
        reject(new Error('Cannot load database'));
      }

      for (const line of data.split('\n').slice(1)) {
        const splitLines = line.split(',');

        if (splitLines.length === values) {
          students += 1;
          if (studentsByField[splitLines[fieldIdx]]) {
            studentsByField[splitLines[fieldIdx]].push(splitLines[fieldItr]);
          } else {
            studentsByField[splitLines[fieldIdx]] = [splitLines[fieldItr]];
          }
        }
      }
      resolve([students, studentsByField]);
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  readCSVAsnc().then(([students, studentsByField]) => {
    let i = 0;

    res.statusCode = 200;
    res.write('This is the list of our student\n');
    res.write(`Number of students: ${students}\n`);
    for (const [field, names] of Object.entries(studentsByField)) {
      i += 1;
      res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      if (i < Object.keys(studentsByField).length) {
        res.write('\n');
      }
    }
    res.end();
  }).catch(() => {
    res.statusCode = 404;
    res.send('Cannot load the database');
  });
});

app.listen(port, () => console.log(`Server Listening on ${port}`));
module.exports = app;
