// 3rd party files/node modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// Our Modules/Files
const notes = require('./notes.js');

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const body = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  //See yargs .command for more details
  .command('add', 'Add a new note', {title, body})
  .command('list', 'List all notes')
  .command('read', 'Read a note', {title})
  .command('remove', 'Remove a note', {title})
  .help()
  .argv;
var command = argv._[0];
if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note)
  {
    console.log('--Note created--');
    notes.logNote(note);
  }
  else {
      console.error("Error: Note was not created! The note was either empty or had a duplicate title");
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`--Printing ${allNotes.length} note(s):--`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.readNote(argv.title);
  if (note) {
    notes.logNote(note);
  }
  else {
    console.log("Error: Note not found");
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? '--Note was removed--' : 'Error: Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
