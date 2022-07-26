// adds the numbers in the array together
function sum(numberArray) {
    let output = 0;
    for (var element of numberArray) {
        output += element;
    }
    return output;
};
var numbers = [
    77,
    20,
    4,
    100
];
console.log(sum(numbers));
// works