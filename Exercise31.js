//Create an array with 5 numbers.
// Ask the user for an index.
// Alert the user of the value of the array's index.

var numbers = [10,20,30,40,50];
var quest = parseInt(prompt("Put an index:"));

if(quest === 0){
    alert(numbers[0]);
}
else if(quest === 1){
    alert(numbers[1]);
}
else if(quest === 2){
    alert(numbers[2]);
}
else if(quest === 3){
    alert(numbers[3]);
}
else if(quest === 4){
    alert(numbers[4]);
}
else {
    console.log("");
}