import promptSync from "prompt-sync";
const prompt = promptSync();

let score = 0;
function calculate_score(user_input, correct_input) {
  if (user_input == correct_input) {
    score = score + 1;
  }
}

console.log(
  "\nTHIS QUIZ CONSISTS OF 5 MCQS.\nPLEASE ENTER THE CORRECT RESPONSE, OTHERWISE YOUR SCORE WILL BE DEDUCTED\n"
);

console.log("1. How many days are there in a week?\n   a) 5   b) 2   c) 7");
let q1 = prompt("   ");
calculate_score(q1, "c");

console.log(
  "2. What is the national fruit of Pakistan?\n   a) Mango   b) Grapes   c) Apple"
);
let q2 = prompt("   ");
calculate_score(q2, "a");

console.log(
  "3. Which animal is known as the king of the jungle?\n   a) Elephant   b) Lion   c) Aligator"
);
let q3 = prompt("   ");
calculate_score(q3, "b");

console.log(
  "4. How many seconds are there in a minute?\n   a) 60   b) 80   c) 20"
);
let q4 = prompt("   ");
calculate_score(q4, "a");

console.log(
  "5. How many sides are there in a triangle?\n   a) 4   b) 3   c) 6"
);
let q5 = prompt("   ");
calculate_score(q5, "b");

console.log("\nYour score is " + score);
