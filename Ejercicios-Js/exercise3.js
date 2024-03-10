console.log("Exercise #3");

/* Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/  

function fncSumAndProd(numbers){
    return numbers.reduce(function(a, b){
        return{
            sum: a.sum + b,
            multi: a.multi * b
        };
    }, {sum: 0, multi: 1});
}

const numbers = [1, 2, 3, 4];
const {sum, multi} = fncSumAndProd(numbers);
console.log(`La suma de ${numbers} es: ${sum}, la multiplicación de ${numbers} es: ${multi}` );