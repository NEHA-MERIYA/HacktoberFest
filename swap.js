//JavaScript program to swap two variables

//take input from the users
let x = prompt('Enter the first variable: ');
let y = prompt('Enter the second variable: ');
let c = prompt('Enter the first variable: ');
let d = prompt('Enter the second variable: ');

//create a temporary variable
let temp;

//swap variables
temp = x;
x = y;
y = temp;
console.log(`The value of a after swapping: ${x}`);
console.log(`The value of b after swapping: ${y}`);
temp = c;
c = d;
d = temp;
console.log(`The value of a after swapping: ${c}`);
console.log(`The value of b after swapping: ${d}`);
