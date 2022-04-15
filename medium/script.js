const word = prompt("Please enter a word!"); 

if (word === word.toUpperCase()) {
    console.log(`This person is shouting ${word}.`);
} else if (word === word.toLowerCase()) {
    console.log(`This person is whisperring ${word}.`);
} else {
    console.log(`This person is talking like a normal person!`);
}