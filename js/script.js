//  1)

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

//  2)

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//  3)

// function checkStorage(available, ordered) {
//   // Change code below this line


//   if (ordered === 0) {
//       return "Your order is empty!";
      
//   } if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
  
//   }

//   return"The order is accepted, our manager will contact you";
//   // Change code above this line
// }
  

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

//  4) 

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);


//  5)

// const fruits = ["apple", "plum", "pear", "orange"];
//  console.log(fruits);
// // Change code below this line
// const firstElement = "apple" ;
// const secondElement = "plum";
// const lastElement = "orange";

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

//  6)

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

//  7)

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

//  8)

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

//  9)


// function getExtremeElements(array) {
//   // Change code below this line
// const arr = array.splice(1, array.length - 2);
//  return array
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

            //  ОБЪЯСНЕНИЕ, ПОЧЕМУ (length -2):

// function getExtremeElements(planets) {
//   const deletedPlanets = planets.splice(1, planets.length - 3);
//   console.log(deletedPlanets);
//   console.log(planets);
// }
// getExtremeElements([
//   'Earth',
//   'Mars',
//   'Venus',
//   'Jupiter',
//   'Uranus',
//   'Saturn',
//   'Neptun',
//   'Tartar',
// ]);


//  11)

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
// words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

//  12)

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// const letters = message.split(" ");
//   const lettersCalc = letters.length;
//   return lettersCalc * pricePerWord;


//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

