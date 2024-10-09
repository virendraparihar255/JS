// Anonymous functions
  let sum = function(num1, num2) {
  return num1 + num2;
};
let newSum = sum;
console.log(sum(4,5));
console.log(newSum(4,5));

// ((4 + 5) + 7)
let sumThreeNumbers = function(num1, num2, num3, sumTwoNumbers) {
  let sum1 = sumTwoNumbers(num1, num2);
  return sumTwoNumbers(sum1,num3);
}
console.log(sumThreeNumbers(4,5,6, sum));

// console.log (my-function) and type of myFunction indicate it's a function 1 ka 6 va wala ha  function ek type ka data type huva javascript me
console.log(sumThreeNumbers);
console.log(typeof sumThreeNumbers); 

// Arrow functions
 //function likhne ke jarurat nahi ha dyrect => laga skthe ha 
 let summ = (num1, num2)  => {
  return num1 = num2;
}
console.log(summ(6,8));

//  single line function yaha  bhi chalga 
let square = num => {
  return num * num;
} 

console.log(square(5)); 

// single line function ye bhi chalga 
/*let square = num => num * num;
console.log(square(5)); */

// SetTimeOut runs /  SetInterval
 let alar = function() {
  console.log('Shubha ho gayi, uth jaao.');
};
setTimeout(alar,5000);
console.log('Alaram set'); 

// time laga bhi skthe ha  ek baar
 /* let alarm = () => {
  console.log('Shubha ho gayi, uth jaao.');
};
setTimeout(alarm,5000);
console.log('Alaram set');  */

// time clear bhi kar skthe ha  
let alarm = () => console.log('Shubha ho gayi, uth jaao.');
let timerId = setTimeout(alarm,1000);
console.log(`Alaram set with timerId:${timerId}`);
clearTimeout(timerId) ;

// setinterval syntax bar bar ek  setinterval kaam karta ha  haar baar
let ala = () => console.log('Shubha ho gayi, uth jaao.');
//let timerId = setTimeout(alarm,1000);
//console.log(`Alaram set with timerId:${timerId}`);
//clearTimeout(timerId) ;
 let IntervalId = setInterval(alarm,1000);
 setTimeout(() => clearInterval(IntervalId), 5000);

 // whileloop, dowhileloop, forloop, ye 3 no pad liye ha 

 // For Each Loop
 let arr = [3,5,7,9];
 for (let i = 0 ; i < arr.length; i++) {
  console.log(arr[i]); 
 } 
 
 arr.forEach((num) => console.log(num));

 // One for item optional second for index.
 let arrr = [1,2,3,4,5,6,7,8,9];
 arrr.forEach(num => {
  if (num ===5) {
    return;
  }
  console.log(`visited:${num}`);
});

//Array Methods  true false
let arry = [1,2,3,4,5,6,7,8,9];
let odds = arry.filter((num, index) => {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
});
console.log(odds);

// false true
/* let arryy = [1,2,3,4,5,6,7,8,9];
let odd = arryy.filter((num, index) => {
  if (num % 2 === 1) {
    return true;
  } else {
    return false;
  }
});
console.log(odd); */

// shortcard
let newOdds = arr.filter(
  (num, index) => num % 2 === 1
);
console.log(newOdds);

// Map method
let ar1 = [1,2,3,4,5];
let squares = ar1.map(num => num*num);
console.log(squares);