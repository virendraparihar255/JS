 // Accessing objects property
let product = {
  //String 
   company: 'Mango',
   //number
   price: 861,
   item_name: 'T-shirt',
};

// isko Bracket ha . Notation  1 rul or ha
console .log(product);
console .log(product.company);
console .log(product.price);
console .log(product.item_name); 

// ek or tarika ha jo breaket kam aata ha ['']   Ans Undefined aaye ga 
let propertyName = 'item-name';
console.log(product.propertyName);

 /*let product = {

};
console .log(typeof product); */ //type of property//

 // Change bhi kar skte ha 
 product.company = 'Banana'
 console .log(product);

 // Brecket Notation 1 or tarika ha 
 console .log(product['company']);
console .log(product.price);
console .log(product.item_name); 

// Value added or removed to an object 
//delete product.company;
delete product['company'];
console.log(product);

//  Inside Object
 let Product = { 
   company: 'Mango',
   price: 861,
   'item-name': 'T-shirt',
   displayprice: function() {
    console.log(`price of the Product is ₹${Product.price}`)
   }
 };

   Product.displayprice(); 
   // console.log()
   // Math.round()
  
   /* ek or frobulaa ha product.price ke jagha this bhi kar skta ha free bhi product ke price aajayegi object ke under object bhi ho skte ha or method ke under method bhi ho skthe ha 
   let Product = { 
   company: 'Mango',
   price: 861,
   'item-name': 'T-shirt',
   displayprice: function() {
    console.log(`price of the Product is ₹${this.price}`)
   }
 };

   Product.displayprice(); */

// Auto Boxing  Aytomatic conversion of primitives to objects /Allows properties and methods to be used on primitives,strings have properties and methods like length,toUpperCase etc.
 console.log('This is KG Coding'.length);
 console.log('This is KG Coding'.toUpperCase());
 console.log('This is KG Coding'.replace('KG', 'Knowledge Gate'));

// object Referencess  object work based jo privites ha vo direct copy ho jate ha but jo object ha vo copy nahi hote ha uske sirf references copy hote he
let a = 5;
let b = a;
console.log(`a=${a}, b=${b}`);
a = 8;
console.log(`a=${a}, b=${b}`);

let x = {num:5};
let y = x;
console.log(`x=${x.num}, y=${y.num}`);
x.num = 8;
console.log(`x=${x.num}, y=${y.num}`);

// references not content ==
// false aaye ga == ya === ha to kya kar rahe ha references check kar rahe ha aagar  values bhi seem ha kafi sara code likh kar dekhna padega  dif ekval ka method dekhna padega  jo individual jake key or value ko compare kare ke  seeem ha ya nahi ha  object 1 hi rahe ga referencess bahut sare 
let p = {pop: 'iujh'};
let q = {pop: 'iujh'};
console.log(p == q);

//  Object Shorthand 
// De- Structuring
 let s = {
  company: 'Mango',
   price:554,
   'item-name': 'T-shrit',
 };

 let {company,price} = s;
 console.log(company);
 console.log(price);