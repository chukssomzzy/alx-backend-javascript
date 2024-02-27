#!/usr/bin/node

console.log('Welcome to Holberton School, what is your name?');
process.stdout.write('Your name is: ');
process.stdin.setEncoding('utf-8');

process.stdin.read();

process.on('exit', () => console.log('This important software is now closing'));
