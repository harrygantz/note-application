var person = {
  name: 'Andrew'
};

person.age = 25;

//node inspect fileName.js to enter inspector
//in order to get to this location in the scrip you will enter 'c' in the inspector
//that will take you to line 10. Then type 'repl' to be able to mess with the code.
debugger;

person.name = 'mike';

console.log(person);
