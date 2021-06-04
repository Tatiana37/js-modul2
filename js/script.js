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


//  10)

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

//  11)

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


//  12)

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
// string = array.join(delimeter);


//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

//  13)

// function slugify(title) {
//   // Change code below this line
//  slug = title.toLowerCase().split(' ').join('-');

// return slug;

//   // Change code above this line
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

//  14)

//  теория
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']


//  задача
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//  15)

//  теория
// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

//  задача
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(oldClients);
// console.log(newClients);
// console.log(allClients);

//  16)

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const array = firstArray.concat(secondArray); 

// const arrayNew = array.length > maxLength ? array.slice(0, maxLength) : array

// return arrayNew;
//     // Change code above this line
//   }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));  
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));  
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));  
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));


//  17)

//  теория

//  for (Инициализация; Условие; Пост - выражение) {
//   // Тело цикла
// }

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const start = 3;
// const end = 7;

// for (let i = start ; i <= end ; i += 1) { // Change this line
//   console.log(i);
// }


//  18)

// function calculateTotal(number) {
//  // Change code below this line
//     let total = 0;
//   for ( let i = 1; i <= number; i += 1) {
//   total += i;
//   }

// return total;
//   // Change code above this line
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));


//  19)


//  теория
// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// задача
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+= 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//  20)

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for ( let i = 0; i < order.length; i += 1){
// total += order[i];
// }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


//  21)


// function findLongestWord(string) {
//   // Change code below this line
// const word = string.split(' ');
//     let longestWord = '';
    
//     for (let i = 0; i < word.length; i += 1) {
//         if (word[i].length > longestWord.length) {
//             longestWord = word[i];
//         }
//     }

//   return longestWord;
 
//   // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));


//  22)

//  теория
// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Jupiter");
// planets.push("Saturn", "Uranus", "Neptune");

// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

//  задача
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for ( let i = min; i <= max; i += 1 ) {
//  numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

//  23)

// function filterArray(numbers, value) {
//    // Change code below this line
//     let newArray = [];

    // for ( const element of numbers ) {
    // if ( element > value ){
    //     newArray.push(element);
    // } 
    // }
    
// return newArray;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([0, 4, 3, 5, 1], 1));


//  
// function filterArray(numbers, value) {
//    // Change code below this line
//     const newArray = [];

//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             newArray.push(numbers[i]); 
//         }

    
//     }
    
// return newArray;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([0, 4, 3, 5, 1], 1));


//  24)

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));
// console.log(checkFruit());


//  25)

// function getCommonElements(array1, array2) {
//   // Change code below this line
// const uniqueElements = [];

//  for (const element of array1) {    
//     if (array2.includes(element)) {
//     uniqueElements.push(element);
//     } 
//  }
//    return uniqueElements;
//  // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


//  26)

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let number of order) {
//     total += number;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));


//  27)

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for ( const element of numbers ) {
//     if ( element > value ){
//         filteredNumbers.push(element);
//     } 
//     }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//  28)

// 5 % 1 = 0;
// // 5, разделенное на 1, равно 5, а остаток - 0

// 5 % 2 = 1;
// //  5, разделенное на 2, равно 2, а остаток - 1

// 5 % 3 = 2;
// //  5, разделенное на 3, равно 1, а остаток - 2

// 5 % 4 = 1;
// //  5, разделенное на 4, равно 1, а остаток - 1

// 5 % 5 = 0;
// //  5, разделенное на 5, равно 1, а остаток - 0
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// a = 0;
// b = 1;
// c = 3;
// d = 5;
// e = 2;


//  29)

// function getEvenNumbers(start, end) {
//    // Change code below this line

//   const numberRow = []; 
//   for ( let i = start; i <= end; i += 1) {
//    if ( i % 2 === 0 ){
//    numberRow.push(i)
//    } 
//     }
//        return numberRow;
//   }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

//  30)

//  теория
// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");

//  задача
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log();


//  31)

//  теория
// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
//       return i;
//     }
//   }

//   // Этот console.log не выполнится
//   console.log("Лог после цикла в теле функции");
// }

// const result = fn();
// console.log("Лог после выхода из функции");
// console.lof(`Результат выполнения функции ${result}`);

//  задача
// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

  
//   // Change code above this line
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

//  32)
// function includes(array, value) {
//   // Change code below this line
  
//   for ( const par of array ){
//     if (par === value){
//   return true;
//     } 
//   } 
//   return false;
//   // Change code above this line
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));