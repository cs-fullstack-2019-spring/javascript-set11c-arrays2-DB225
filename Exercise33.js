//Ask the user to enter a word to add to an array.
// Add the user input into the array.
// If the user enters a 'q', stop asking them to enter a word.

var word = ["word1","Word2","Word3"];

do{
    var quest = prompt("Put a word to add an array:");
}
while(quest !== "q");
console.log(word.push(quest));