import { readFile } from 'fs';

const fieldIdx = 3;
const values = 4;
const fieldItr = 0;

export default function readDatabase(dbUrl) {
  return new Promise((resolve, reject) => {
    readFile(dbUrl, { encoding: 'utf-8' }, (err, data) => {
      const studentsByField = {};
      if (err) {
        reject(new Error('Cannot load database'));
      }

      for (const line of data.split('\n').slice(1)) {
        const splitLines = line.split(',');

        if (splitLines.length === values) {
          if (studentsByField[splitLines[fieldIdx]]) {
            studentsByField[splitLines[fieldIdx]].push(splitLines[fieldItr]);
          } else {
            studentsByField[splitLines[fieldIdx]] = [splitLines[fieldItr]];
          }
        }
      }
      resolve(studentsByField);
    });
  });
}
