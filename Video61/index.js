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
let random = Math.random()
let a = prompt("Enter first number")
let b = prompt('Enter second number')
let c = prompt("Enter operation")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}
console.log(random)

if (random > 0.1) {
    // perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
