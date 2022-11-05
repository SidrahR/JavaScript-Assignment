import promptSync from "prompt-sync";
const prompt = promptSync();

class Calculator {
  constructor(number1, number2) {
    this.num1 = number1;
    this.num2 = number2;
  }

  add() {
    return num1 + num2;
  }

  sub() {
    return num1 - num2;
  }

  multiply() {
    return num1 * num2;
  }

  div() {
    return num1 / num2;
  }

  mod() {
    return num1 % num2;
  }
}

console.log("\n------ WELCOME TO CALCULATOR APP ------");
console.log("\nThis calculator can perform + - x / %\n");

let ans = "";
do {
  var num1 = Number(prompt("Enter 1st number: "));
  var num2 = Number(prompt("Enter 2nd number: "));
  let operation = prompt(
    "Which mathematical operation do you want to perform: "
  );

  let obj = new Calculator(num1, num2);

  switch (operation) {
    case "+":
      console.log("Sum is " + obj.add());
      break;

    case "-":
      console.log("Difference is " + obj.sub());
      break;

    case "x":
      console.log("Product is " + obj.multiply());
      break;

    case "/":
      console.log("Quotient is " + obj.div());
      break;

    case "%":
      console.log("Remainder is " + obj.mod());
      break;

    default:
      console.log("Please Enter Correct Operator");
      break;
  }

  console.log("\nDo you want to perform another calculation? (Y to continue)");
  ans = prompt("");
} while (ans == "y" || ans == "Y");
