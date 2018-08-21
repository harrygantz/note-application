// var obj = {
//   name: 'Harry'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Harry", "age": 25}';
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

//Convert the originalNote JSON object to a string
var originalNoteString = JSON.stringify(originalNote);
//write file using file system to playground folder
fs.writeFileSync('notes.json', originalNoteString);

//read using file system into a variable from specified file
var noteString = fs.readFileSync('notes.json')

//parse the string back into a json oject
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
