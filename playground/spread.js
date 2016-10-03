// function add(a, b) {
//   return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];
// console.log(add(...toAdd));


// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];

// console.log(final);

var person = ['Aaron', 31];
var personTwo = ['Jen', 29];

// Hi Aaron, you are 31
function nameAge(name, age) {
  console.log("Hi " + name + ", you are " + age);
}

nameAge(...person);

var names = ['Mike', 'Bend'];
var final = ['Aaron', ...names];

// Hi name
final.forEach(function(name) {
  console.log("Hi " + name);
}, this);

