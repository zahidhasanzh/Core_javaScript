//nodejs process object ...we are interested process.argv

console.log(process.argv);
// Open Terminal:
// C: \Users\zahid\Desktop\Core_javaScript > node number_project.js
// ['C:\\Program Files (x86)\\nodejs\\node.exe',   ----->path--->arry index[0]
// 'C:\\Users\\zahid\\Desktop\\Core_javaScript\\number_project.js']    ----->file name--->arry index[1]


console.log(process.argv);
// Open Terminal:
// C: \Users\zahid\Desktop\Core_javaScript > node number_project.js 123 50
// ['C:\\Program Files (x86)\\nodejs\\node.exe',    ----->path--->arry index[0]
// 'C:\\Users\\zahid\\Desktop\\Core_javaScript\\number_project.js', ----->file name--->arry index[1]
// '123',   --->arry index[2]
// '50']    --->arry index[3]

//number project 
let x = parseInt(process.argv[2]);
let y = parseInt(process.argv[3])

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y)
console.log(x%y);

//C:\Users\zahid\Desktop\Core_javaScript>node number_project.js 100 50
//output: 150
//output: 50
//output: 5000
//output: 2
//output: 0


