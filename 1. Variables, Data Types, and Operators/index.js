/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

console.log(x)
var x = 5

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let z = 5
console.log(z)

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const y = 10
console.log(y)




// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: 

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
var op = 3 + 3 * 9
var j = 4
var k = ++j
console.log(k)
console.log(op)
var i = 10
var m = 2
let a = Math.floor(i/m)
console.log(a)


// Checkpoint 1.2 What operators did you use?
// Answer: 
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let string = 'hello'
string += ' world'
console.log(string + " hello")
// Checkpoint 1.3 What operators did you use?
// Answer: 

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const logOp = true && false || true
console.log(logOp)

// Checkpoint 1.4 What operators did you use?
// Answer: 


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const dog = ["hotdog", "cheesedog", "corndog"];
const g = 2 in dog
const h = 3 in dog
console.log(h)
console.log(g)
console.log(dog[1])

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here