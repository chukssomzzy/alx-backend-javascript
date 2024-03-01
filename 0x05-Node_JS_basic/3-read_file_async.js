#!/usr/bin/node

const fs = require('fs');

const fieldIdx = 3;
const fieldInrIdx = 0;
const fieldLen = 4;

function printField([fieldFound, numStudent]) {
  return new Promise((res) => {
    const outString = [];

    for (const [field, names] of Object.entries(fieldFound)) {
      const csvString = `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      outString.push(csvString);
      console.log(csvString);
    }
    res([outString, numStudent]);
  });
}

function sepField(lines) {
  return new Promise((res) => {
    const fieldFound = {};

    for (const line of lines) {
      const splitLine = line.split(',');
      if (splitLine.length === fieldLen) {
        if (fieldFound[splitLine[fieldIdx]]) {
          fieldFound[splitLine[fieldIdx]].push(splitLine[fieldInrIdx]);
        } else {
          fieldFound[splitLine[fieldIdx]] = [splitLine[fieldInrIdx]];
        }
      }
    }
    const numStudent = `Number of students: ${lines.length}`;
    res([fieldFound, numStudent]);
  });
}

function splitToLine(data) {
  return new Promise((res) => {
    const strRead = data;
    const lines = [];
    let line = '';

    for (const ch of strRead) {
      if (ch !== '\n') {
        line += ch;
      } else if (line.length) {
        lines.push(line);
        line = '';
      }
    }
    res(lines.slice(1));
  });
}

function readLine(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        rej(new Error('Cannot load the database'));
      }
      res(data);
    });
  });
}

function countStudents(path) {
  return new Promise((res) => {
    res(path);
  })
    .then(readLine)
    .then(splitToLine)
    .then(sepField)
    .then(printField);
}

module.exports = countStudents;
