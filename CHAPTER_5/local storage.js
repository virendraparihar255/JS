 // JavaScript object notation Common network calls and data storage,JSON.stringify() and JSON.parse()  / strings are easy to transport over network/
 let product = {
  name:'TShrit',
  price: 789,
  rating: {
     stars: 4.5,
     noOfReviews: 453,
  }, 
 }; 
 console.log(typeof product);
 console.log(product);
 let str = JSON.stringify(product);
 console.log(typeof str);
 console.log(str);

 // new 
 let newProduct = JSON.parse(str);
 console.log(typeof newProduct);
 console.log(newProduct); 

 // local Storage
 localStorage.setItem('Name', 'KG Coding');
 localStorage.setItem('Price', '87656');

 console.log(localStorage.getItem('Name')); 
localStorage.clear();