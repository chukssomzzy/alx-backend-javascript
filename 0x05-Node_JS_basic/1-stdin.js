#!/usr/bin/node

console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');

if (process.stdin.isTTY) {
  process.stdin.on('data', (name) => {
    process.stdout.write(`Your name is: ${name}`);
  });
} else {
  process.stdin.on('data', (name) => {
    process.stdout.write(`Your name is: ${name}`);
    process.exit();
  });
}
process.on('exit', () => console.log('This important software is now closing'));
