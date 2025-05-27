function nice (name) {
    console.log("Hey" + name + "you are nice!")
    console.log("Hey" + name + "you are good!")
    console.log("Hey" + name + "your  tshirt is nice!")
    console.log("Hey" + name + "your  course is good too!")
    
}
function sum(a,b, c = 3) {
    // console.log(a+b)
    console.log(a,b,c)
    return a + b
}
sum(3,5)
result = sum(3,5)
result1 = sum(7,5)
result2 = sum(3,13, 1)
console.log("The sm of these number is :", result)
nice("Rohan")

nice("Shivam")
// console.log("Hey Harry Your are Nice!")
// console.log("Hey Harry You are Good!")
// console.log("Hey Harry Your tshirt is nice!")
// console.log("Hey Harry Your course is good too!")

const func1 = (x) =>{
    console.log("I am and arrow function", x)
}
func1(34);
func1(66);
func1(84);