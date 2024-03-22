console.log("Exercise #6");
/*
--Exercise # 6
--Write a function that performs the bubble algorithm.
--Input [3, 6, 12, 5, 100, 1]
--Output [1, 3, 5, 6, 12, 100]
*/
function algortimoBurbuja(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const array = [3, 6, 12, 5, 100, 1];
console.log(array);
console.log(algortimoBurbuja(array));