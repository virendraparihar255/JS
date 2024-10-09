// Boolean  Opertors 1
 // false
 console.log(5 > 8);

 // True
 console.log(5 < 8);

 // Boolean  data type
 console.log(typeof (5 < 8));

 // String   data type
 console.log(typeof 'true');

 // Comparison Opertors 2 
 // Relational
 // Greater Than
//False
 console.log(5 > 8);

 // Less Than
 //True
 console.log(5 < 8);

// Gerater than or equal to
//false
console.log(5 >= 8);

//true
console.log(8 >= 8 );

//Less than or equal to
// false
console.log(7 <= 5);

// true
console.log(1 <= 8);

//Equality 
//false
console.log(8 == 4);

//true
console.log(8 == 8);

//true
console.log(5 == '5.0');
console.log(5 == '5');

// false
console.log(5 === '5.0');
console.log(5 === '5');

// Inequality
//true
 console.log(5!=4);

 //false
 console.log(5!=5);

 //false
 console.log(5!==5);

//true
console.log(7!==6);

// if- else  3 syntax
console.log("Checking if you can drive");
let age = 22;
if (age > 18) {
  console.log("You can drive");
}
if (age < 18) {
  console.log("Use a Bicycle");
}

// else 
 /* console.log("Checking if you can drive");
let age = 22;
                                                 //agar
if (age > 18) {
  console.log("You can drive");
                                                 //warna
} else {
 console.log("Use a Bicycle")
}  */

 // Logical Opertors  { And (&&) }  2 opernt per lagta ha lift or right 
 let umar = 12;
 console.log(umar > 18);
 console.log(umar < 65); 
if (umar > 18 && umar < 65) {
    console.log('You can drive');
} else {
  console.log('Use a Bicycle');
}

// { OR (||) } 2 opernt per lagta ha lift or right
let a = 12;
console.log(a < 18);
console.log(a > 65); 
if (a < 18 || a > 65) {
   console.log('Use a Bicycle ');
} else {
 console.log('You can Drive');
}

// {Not (!) }  single opert  per lagta ha  ulta 
// true likhe ge to false aayga
console.log(!true);

// false likhe ge to true aayga
console.log(!false);

// Scope  any variable created inside {} will remain inside {}
 let u = 35;
 if (u > 18) {
 let userMessage ='You can drive';
 console.log(userMessage);
 } else {
  let userMessage ='Use a Bicycle';
  console.log(userMessage);
 }