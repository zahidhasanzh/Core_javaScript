// String is a primitive data type in JavaScript.A string is textual content.It must be enclosed in single or double quotation marks.

"hello world" //String literal
var x = "hello world" //String literal assigned to a variable
let y = 'hello world'

// const z = 'hello' i am zahid' wrong
const z = "hello' i am zahid" //right
let a = 'hello\' i am zahid' //right

console.log(z, a); //output: hello' i am zahid hello' i am zahid

console.log("hello world"); //output: hello world

var m = "hello\n zahid" //new line
console.log(m); 
// output:hello
// world

var k = "hello\v zahid" //vertical tab
var j = "hello\t" //horizontal tab


//Starting with ECMAScript 2015, string literals can also be so-called
console.log(`hello world`);
//string in variable assign
var b = 28;
var c = `your age is ${b} selected you`;

console.log(c); //output:your age is 28 selected you

var n = "zahid"+"hasan"
console.log(n); //output:zahidhasan

var i = "zahid"+28;
console.log(i); //output:zahid28



 
 








