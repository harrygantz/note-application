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
if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note)
  {
    console.log(`Note "${note.title}" created`);
  }
  else {
      console.error("Error: Note was not created! The note was either empty or had a duplicate title");
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  var note = notes.readNote(argv.title);
  if (note) {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  }
  else {
    console.log("Error: Note not found");
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Error: Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
