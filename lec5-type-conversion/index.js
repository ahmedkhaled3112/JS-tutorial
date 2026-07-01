// Type Conversion : Converting a value from one data type to another.     

// string to int : 
let age = window.prompt("Enter your age");
console.log(age + 1 ); // string + int = string
console.log(typeof age);
age = Number(age);
console.log(age + 1); // int + int = int
console.log(typeof age);
console.log("You are " + age + " years old");

// int to string :
age = String(age);
console.log(typeof age);

// int to boolean :
age = Boolean(age);
console.log(typeof age);

// string to boolean :
age = Boolean(age);
console.log(typeof age);    

let x = "pizza";
let y = "pizza";
let z = "pizza";

console.log(Number(x)); // NaN
console.log(String(y)); // pizza
console.log(Boolean(z)); // true

let x1 = "0";
let y1 = "0";
let z1 = "0";

console.log(Number(x1)); // 0
console.log(String(y1)); // "0"
console.log(Boolean(z1)); // false

let x2 = "";
let y2 = "";
let z2 = "";

console.log(Number(x2)); // 0
console.log(String(y2)); // ""
console.log(Boolean(z2)); // false