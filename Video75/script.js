console.log("harry is a hacker")
console.log("Rohan is a hacker")

setTimeout(() => {
    console.log("I am inside settimeout")
    }, 0);
setTimeout(() => {
    console.log("I am inside settimeout 2")
    }, 0);

console.log("The End")

const fn = (params) => {
    console.log("Nothing")
}

const callback = (arg) =>{
    console.log(arg)
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc)

}
loadScript("", callback)
