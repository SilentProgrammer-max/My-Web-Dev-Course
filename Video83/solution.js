// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = ["Shubh", "Anajali", "Shivani", "Shivangi", "Annapurna", "Shubham", "Krishnanendu", "Ravindranathan", "Shivesh", "kaif", "Emanuel"]

let houses = []

for (const student of students) {
    if (students.length < 6 ){
        houses.push("Grayffindor")
    }
        else if(student.length < 8){
            houses.push("Hufflepuff")
        }
        else if (student.length < 12){
            houses.push("Ravenclaw")
        }
        else{
            houses.push("Slytherin")
        }
    }
console.log(houses)

// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleTrouble(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is the same as the previous one (consecutive duplicate)
    if (i > 0 && arr[i] === arr[i - 1]) {
      result.push(arr[i]); // Keep as it is (don't double again)
    } else {
      result.push(arr[i] * 2); // Double the element
    }
  }

  return result;
}
console.log(doubleTrouble([2, 2, 3]));     
// Output: [4, 2, 6]

console.log(doubleTrouble([5, 5, 5, 6]));  
// Output: [10, 5, 5, 12]

console.log(doubleTrouble([1, 2, 3, 3, 4])); 
// Output: [2, 4, 6, 3, 8]

// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorMirror(str) {
  let reversed = str.split('').reverse().join('');
  return str + reversed;
}
console.log(mirrorMirror("hello"));    
// Output: "helloolleh"

console.log(mirrorMirror("abc"));      
// Output: "abccba"

console.log(mirrorMirror("123"));      
// Output: "123321"

// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function isValidPassword(password) {
  const lengthCheck = password.length >= 8;
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /[0-9]/.test(password);

  return lengthCheck && hasLowercase && hasUppercase && hasDigit;
}
console.log(isValidPassword("Password123")); // true
console.log(isValidPassword("pass123"));     // false (no uppercase, less than 8)
console.log(isValidPassword("PASSWORD123")); // false (no lowercase)
console.log(isValidPassword("Password"));    // false (no digit)

// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.
function sumUntilNegative(arr) {
  let sum = 0;
  
  for (let num of arr) {
    if (num < 0) break;
    sum += num;
  }

  return sum;
}
console.log(sumUntilNegative([5, 10, 15, -3, 20])); // 30
console.log(sumUntilNegative([2, 4, 6]));           // 12
console.log(sumUntilNegative([-1, 100, 200]));      // 0