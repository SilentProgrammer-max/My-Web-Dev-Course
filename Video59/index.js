/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. it takes two humbers as input from the user
2. it perfoms wrong operations as follows:
It performs wrong operation 10% of the times
+ ---> -
* ---> +
- ---> /
/ ---> **
*/
// Solution
// Step 1: Take input from the user
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", function(num1) { 
  rl.question("Enter second number: ", function(num2) {
    rl.question("Enter operator (+, -, *, /): ", function(operator) {

      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      let result;

      let randomChance = Math.random();

      if (randomChance < 0.1) {
        console.log("Performing faulty operation!");

        if (operator === "+") {
          result = num1 - num2;
        } else if (operator === "-") {
          result = num1 / num2;
        } else if (operator === "*") {
          result = num1 + num2;
        } else if (operator === "/") {
          result = num1 ** num2;
        } else {
          console.log("Invalid operator!");
        }

      } else {
        console.log("Performing correct operation!");

        if (operator === "+") {
          result = num1 + num2;
        } else if (operator === "-") {
          result = num1 - num2;
        } else if (operator === "*") {
          result = num1 * num2;
        } else if (operator === "/") {
          result = num1 / num2;
        } else {
          console.log("Invalid operator!");
        }
      }

      console.log("Result: " + result);
      rl.close();
    });
  });
});