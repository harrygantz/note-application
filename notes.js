console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    //Read from the data file to see what notes where already written.
    var noteString = fs.readFileSync('notes-data.json');
    //Save the data into json object notes.
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};
//Saves out notes array to specified file location
var  saveNotes = (notes) => {
  //Take the array of json objects and turn them to a string then write the them
  // to a specified file in this case notes-data.json
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) => {
  //Our notes array
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  //filter() is an array method that that takes a callback
  var duplicateNotes = notes.filter((note) => note.title === title);

  //Check to see if there are any duplicate notes
  if (duplicateNotes.length === 0) {
    //the push() on an array adds an item to the end of an array. So in this
    //case we add our note.
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};
//Notice that the syntax for the anonymous function above is using => while the
//one below is using function(). These are very similar and with ES6 I will be
//using => for my anonymous functions.
var getAll = function() {
  console.log('Getting all notes');
}
var readNote = (title) => {
  var notes = fetchNotes();
  var matchingNotes = notes.filter((note) => note.title === title);
  return matchingNotes[0];
}
// Notice that the syntax in the console.log for readNote and removeNote are
//different, however, they do the same thing. Returns true if it successfully
//removed a note and false otherwise.
var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return (notes.length !== filteredNotes.length);
}

module.exports = {
  addNote: addNote,
  //note the syntax for addNote and getAll is different, however, in ES6 they do
  //the same thing.
  getAll,
  readNote,
  removeNote
}
