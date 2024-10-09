//  String Variables 1
let welcomeMessage ='Hello World!!';

console.log('hello world!!');
console.log(welcomeMessage);

// Number Variables
let bagPrice = (15599 -(10/100 * 15599)) - 272;
let jeansPrice = (2499 - (41/100 * 2499)) - 29;
let bagValue = Math.round((jeansPrice + bagPrice + 25 + 20) * 118 / 100);
let bagSummary = `Your final Myntra Bag amount is ₹${bagValue}`;
console.log(bagSummary);

// Syntax Rules 2
//  Can't Use keywords  or reserved words
//let let =5;


// Can't use Start with a number 
//let 5match;
//let ma-tch;

// No special characters other than $ and _
//let ma_tch = 77;
//let ma$tch = 77;

// ; means end 
 /* let a = 3 let b = 4 console.log(a+b) */
 let d = 3;
 let e = 9;
 console.log(d+e); 

// Updating Values 3  Shorthand Opertors
let a = 5;
let b = 6;
let c = a + 4;
console.log(c);
c = b + 2;
console.log(c);

// Shorthand 
/*let i = 5;
console.log(i);
// i = i + 5;
i = i + 5;
console.log(i); */

let i = 5;
console.log(i);
i = i + 5;
console.log(i);

//Ways to create variables  (Const)  6
 const pi = 3.14159265359;
let radius = 4;
//pi = 2;
console.log(pi * radius * radius);