import numWords from "num-words";
import promptSync from "prompt-sync";
const numtoWords = numWords();
const prompt = promptSync();

let num = prompt("Enter a number to convert into words: ");
console.log('Your number in words is "' + numWords(num) + '"');

// npm i num-words
