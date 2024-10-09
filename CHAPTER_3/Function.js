 //  Functions Syntax
 let age = 21;
 function PrintAge() {
  console.log(`Your age is ${age}`);
 }
 // function coll karna ya invoke karna bola jata h 
   PrintAge();

   age = 76;
   PrintAge();
   age = 1;
   PrintAge();

   // function return
    function generateRandomMove() {
      let random = Math.random();
      let randomMove = random * 3;
      return randomMove;
    }
   console.log(generateRandomMove());
   console.log(generateRandomMove());
   console.log(generateRandomMove());
   console.log(generateRandomMove());
   console.log(generateRandomMove());
  
   // Parameters  Function keyword ,function name, value, parameters, return, returnType, bola jata h (a,b) ko perameters bola jata h
   function sum(a,b) {
    let sum = a + b;
    return sum;
   }

  // colling ke time per pass karte h to RQ Mentes bola jata h (4,5)
   console.log(sum(4,5));
   console.log(sum(41,55));
   console.log(sum(0,0));
   console.log(sum(1,-1));
   console.log(sum(6,9.8));

  // default Value
 /* function greeting(name) {
    console.log(`Namaste ${name} uncle`);
   }

   greeting('Titu'); */

   function greeting(name = 'Titu') {
    console.log(`Namaste ${name} uncle`);
   }
   greeting();