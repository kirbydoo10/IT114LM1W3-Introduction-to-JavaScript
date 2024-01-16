/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(numbers[0], numbers[4], numbers[numbers.length - 1])

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let min = Math.min(...numbers)
let max = Math.max(...numbers)
let ave = numbers.reduce((acc, num) => acc + num, 0) / numbers.length
console.log("min", min)
console.log("max", max)
console.log("Average", ave)
// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: 

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

const IT114L = {
    coursecode: "IT114L",
    name: "Web Systems and Technology",
    units: "3",
    numberofstudents: "40"
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.ProfessorName = "Job Lipat"
console.log(IT114L.ProfessorName)
// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
const courses = [
{
    coursecode: "CS107",
    name: "Information Management",
    units: 2,
    numberofstudents: "40",
    professorname: 'Dahlia De Mesa'
},
{
    coursecode: "CS107L",
    name: "Information Management (Lab)",
    units: 1,
    numberofstudents: "40",
    professorname: 'Dahlia De Mesa'
}
]

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
const total = courses.reduce((total, courses) => total + courses.units, 0)
console.log(total)


// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: 

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let num = [...numbers, 230]
console.log(num)
// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

let {coursecode, units} = {...IT114L}
console.log(coursecode, units)