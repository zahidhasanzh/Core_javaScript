//JavaScript - Number
//The Number is a primitive data type in JavaScript.Number type represents integer, float, hexadecimal, octal or exponential value.First character in a Number type must be an integer value and it must not be enclosed in quotation marks.

// var int = 50;
// var float = 50.5;
// var hex = 0xfff;
// var exponential = 5.56e3;
// var octal = 040;


//decimal number
console.log(50); 50
//float
console.log(50.5); 50.5
//binary number
console.log(0b11); 3
//octal
console.log(0o12); 10
//hexadecimal
console.log(0x0f); 15

//Number Properties

//Returns the maximum number value supported in JavaScript.
console.log(Number.MAX_VALUE); 1.7976931348623157e+308

//Returns the smallest number value supported in JavaScript.
console.log(Number.MIN_VALUE); 5e-324

//As a number represents we can do
console.log(5e8); 500000000

//Let's take a look at an example of how to use the parseInt() method in JavaScript.
console.log("123"); // 123 is string
console.log(Number.parseInt("123"));// 123 it is integer number
console.log("123.66"); // 123.66 is string
console.log(Number.parseFloat("123.66")); // 123.66 is float number

//Represents positive infinity (Infinity).
console.log();

// 	Represents positive infinity (Infinity).
console.log(Infinity);
// Returns negative infinity (-Infinity)
console.log(-Infinity);
//Represents a value that is not a number.
console.log(NaN);

//JavaScript | typeof operator
console.log(typeof 123); //output: number
console.log(typeof "zahid"); //output: string
console.log(typeof NaN); //output: number
console.log(typeof Infinity); //output: number
console.log(typeof true); //output: boolean
console.log(typeof null); //output: object

//javaScript Mathematical Operators

console.log(10 + 10.5); //output: 20.5
console.log(10 - 10.5); //output: -0.5
console.log(10 * 10.5); //output: 105
console.log(10 / 10); //output: 1
console.log(100 % 5); //output: 0























