#!/usr/bin/node

const fs = require('fs');

function findFields(lines, fieldIdx, fieldLength, fieldInt) {
  const fieldName = {};

  for (const line of lines) {
    const splitLine = line.split(',');

    if (splitLine.length === fieldLength) {
      if (fieldName[splitLine[fieldIdx]]) {
        fieldName[splitLine[fieldIdx]].push(splitLine[fieldInt]);
      } else {
        fieldName[splitLine[fieldIdx]] = [splitLine[fieldIdx]];
      }
    }
  }
  return fieldName;
}

function lineInFile(path) {
  try {
    const fileString = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
    const lines = [];
    let line = '';

    for (const c of fileString) {
      if (c !== '\n') {
        line += c;
      } else if (line.length) {
        lines.push(line);
        line = '';
      }
    }
    return lines;
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

function countStudents(path) {
  const lines = lineInFile(path).slice(1);

  if (lines) {
    const splitField = findFields(lines, 3, 4, 1);
    console.log(`Number of students: ${lines.length}`);
    for (const field of Object.keys(splitField)) {
      console.log(`Number of students in ${field}: ${splitField[field].length}. List: ${splitField[field].join(', ')}`);
    }
  }
}

module.exports = countStudents;
