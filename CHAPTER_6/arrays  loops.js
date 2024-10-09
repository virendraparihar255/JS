 // Array syntax & values
 let numbers = [1,4,3,7,5,6,7,2];
 console.log(numbers);
 console.log(numbers[5]);

 let doosra = [1, true, null, 'asde'];
 console.log(doosra[2]);
 console.log(typeof doosra);

 // Array Properties & Methods
 // push element add or remove to end
 let arr = [1,2,3];
 console.log(arr);
 arr.push(6);
 console.log(arr);
 
 // pop  element
 arr.pop();
 console.log('popped' + arr.pop());
 console.log(arr);

 console.log('popped' + arr.pop());
 console.log(arr);

 // splice Add or remove  element
 let ara = [3,5,7,6];
 console.log(ara);
 ara.splice(1,2);
 console.log(ara);


 // toString convert to string
 let array =  [5,1,9,8];
 console.log(array.toString());

// sort elements
let arra =  [7,8,5,1];
console.log(arra);
arra.sort();
console.log(arra);

// valueOf get array itself  Sem item print ho jati ha 
 console.log(arra.valueOf());

 // Arrays also use reference like objects
 let arr2 = arr;
 arr2 [0] = 45;
 console.log(arr);

 // De-structuring also works for arrays
 let arr1 =  [8,1,6,5];
 console.log(arr1);

 let [a,b,c] = arr1;
 console.log(a + " " + b + " " + c);

 // What is loop code that runs multiple times based on a condition Functions;
 // while loop
  let num = 1;        // Initialization
  while (num <= 10) {    // Condition
   console.log(num);
   num++;        //updating
  }
  console.log('Final value of num is:' + num ); 

// Non-Standard
  /* let x = 0;
 while (x < 1) {
  console.log(x);
 }
 console.log('Final value of x is:' + x);  */
// Do while loop
let no = 0; // initaliztion
do {
  console.log(no);
  no++; // updating
} while (false); // condition

// for loop 
/* for (let num = 1; num <= 10; num++) {
  console.log(num);
 } */
 
 let nums = [4,56,8,3,-87,9,78,4,6,856,14236,845];
 for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
 }