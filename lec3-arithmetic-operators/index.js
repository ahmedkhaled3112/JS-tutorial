// Arithmetic Operators : 
//  +, -, *, /, %, **

// operands : The values that are operated on by the operators 
//            The operands are stored in variables ex. a and b are operands
// operators : The symbols that perform the operations ex. +, -, *, /, %, ** are operators

let a = 10;
let b = 20;

console.log(a + b); // 30
console.log(a - b); // -10
console.log(a * b); // 200
console.log(a / b); // 0.5
console.log(a % b); // 10
console.log(a ** b); // 10^20


// Unary Operators : 
//  ++, --

let x = 10;

// Post increment
console.log(x++); // 10 (Value before increment)
console.log(x);   // 11 (Value after increment)

// Pre increment
console.log(++x); // 12 (Value before increment)
console.log(x);   // 12 (Value after increment)

// Post decrement
console.log(x--); // 12 (Value before decrement)
console.log(x);   // 11 (Value after decrement)

// Pre decrement
console.log(--x); // 10 (Value before decrement)
console.log(x);   // 10 (Value after decrement)


let y = 10;
console.log(y++ + ++y); // 10 + 12 = 22



// Compound Assignment Operators : 
//  +=, -=, *=, /=, %=, **=

let num1 = 10;
let num2 = 20;

num1 += num2; 
console.log(num1); // 30

num1 -= num2;
console.log(num1); // 10

num1 *= num2;
console.log(num1); // 200

num1 /= num2;
console.log(num1); // 10

num1 %= num2;
console.log(num1); // 10

num1 **= num2;
console.log(num1); // 10^20

// Operator precedence : The order in which operators are evaluated
// 1- Parenthesis ()
// 2- Exponentiation **
// 3- Unary ++ --
// 4- Multiplication * Division / Modulo %
// 5- Addition + Subtraction -

console.log(10 + 20 * 30);
console.log((10 + 20) * 30);
