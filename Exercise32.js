//Create an array with 5 numbers.
// Ask the user for the length of the array you want to print.
// Alert the user of the array from 0 to their input.

var numbers = [10,20,30,40,50];
var quest = parseInt(prompt("Put the array you want to print:"));

for(i=0; i<quest; i++){
    console.log(numbers[i]);
}
