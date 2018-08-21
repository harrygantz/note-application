console.log('Starting app.js');

// 3rd party files/node modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// Our Modules/Files
const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command:', command);
console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
