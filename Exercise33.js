//Ask the user to enter a word to add to an array.
// Add the user input into the array.
// If the user enters a 'q', stop asking them to enter a word.

var word = ["word1","Word2","Word3"];

// KEY: A while loop works better for this
while (true) {
    var quest = prompt("Put a word to add an array:");
    if (quest==="q") // If entered q then break out of loop
    {
    	break;
    }
    word.push(quest); // Add the entered word
}
// You were pushing word outside of loop so only 'q' was getting added to array
console.log(word);