#!/usr/bin/env node
const fs = require('fs')

function displayMessage(strToPrint) {
  process.stdout.write(strToPrint + '\n')
}

module.exports = displayMessage
