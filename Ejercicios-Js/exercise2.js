console.log("Exercise #2");
/*
Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

const callBackFnc = ( element, index, array ) => element *2;
const numbers = [1, 2, 4, 5]
const duplicate = numbers.map(element => element * 2 );
console.log( numbers );
console.log( duplicate );

