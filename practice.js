// // 1

// let array = [2, 4, 5, 7, 12];
// let sum = 0;
// array.forEach((number) => {
//   sum = sum + number;
// });

// console.log(sum);

// // 2

// function smallestString(array) {
//   let shortest = array[0];
//   array.forEach((string) => {
//     if (string.split("").length < shortest.split("").length) {
//       shortest = string;
//     }
//   });
//   return shortest;
// }
// console.log(smallestString(["hey", "hello", "hi", "whats up?"]));

// // 3

// function reverseArray(array) {
//   let index = array.length - 1;
//   let reversed = [];
//   while (index >= 0) {
//     reversed.push(array[index]);
//     index -= 1;
//   }
//   return reversed;
// }

// console.log(reverseArray([2, 4, 6, 3, 8, 9, 11]));

// // 4

// function wordsStartingWithA(array) {
//   let counter = 0;
//   array.forEach((word) => {
//     if (word.split("")[0] === "a") {
//       counter++;
//     }
//   });
//   return counter;
// }

// console.log(wordsStartingWithA(["alabama", "arkansas", "boston", "alaska"]));

// // 5

// function joinWords(array) {
//   let fullString = "";
//   let index = 0;
//   while (index < array.length) {
//     if (index < array.length - 1) {
//       fullString = fullString + array[index] + ", ";
//     } else {
//       fullString = fullString + array[index];
//     }
//     index++;
//   }
//   return fullString;
// }

// console.log(joinWords(["what", "is", "up", "my", "dude"]));

// // 6

// function multiplyArray(array) {
//   let product = 1;
//   array.forEach((number) => {
//     product = product * number;
//   });
//   return product;
// }

// console.log(multiplyArray([2, 4, 5, 3, 7]));

// // 7

// function smallestTwoNum(array) {
//   let smallestNum = 0;
//   let secondSmallestNum = 0;
//   if (array[0] < array[1]) {
//     smallestNum = array[0];
//     secondSmallestNum = array[1];
//   } else {
//     secondSmallestNum = array[0];
//     smallestNum = array[1];
//   }
//   array.forEach((number) => {
//     if (number < smallestNum) {
//       secondSmallestNum = smallestNum;
//       smallestNum = number;
//     } else if (number < secondSmallestNum) {
//       secondSmallestNum = number;
//     }
//   });
//   // console.log(smallestNum);
//   // console.log(secondSmallestNum);
//   return `The two smallest numbers are ${smallestNum} and ${secondSmallestNum}`;
// }

// console.log(smallestTwoNum([4, 5, 7, 3, 8, 2, 6]));

// // 8

// function zeroCounter(array) {
//   let zeroes = 0;
//   array.forEach((number) => {
//     let digits = number.toString().split("");
//     for (let i = 0; i < digits.length; i++) {
//       if (parseInt(digits[i]) === 0) {
//         zeroes++;
//       }
//     }
//   });
//   return `The number zero occurs ${zeroes} time(s).`;
// }

// console.log(zeroCounter([12, 300, 0, 60, 23, 500, 2000, 30]));

// // 9

// function biggerThanTen(array) {
//   let bigger = true;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] < 10) {
//       bigger = false;
//     }
//   }
//   if (bigger) {
//     return "All numbers are bigger than 10!";
//   } else if (!bigger) {
//     return "The numbers are not all bigger than 10";
//   }
// }

// console.log(biggerThanTen([12, 14, 34, 56, 78]));

// // 10

// function aCounter(array) {
//   let aCount = 0;
//   for (let i = 0; i < array.length; i++) {
//     let letters = array[i].split("");
//     for (let j = 0; j < letters.length; j++) {
//       if (letters[j] === "a") {
//         aCount++;
//       }
//     }
//   }
//   return `The letter 'a' appears ${aCount} time(s).`;
// }

// console.log(aCounter(["apple", "banana", "orange", "tomato"]));

// function graduated(string) {
//   if (string === "May 19th") {
//     return "YOU'RE DONE!!!";
//   }
// }

// console.log(graduated("May 19th"));

// function randomNumber() {
//   var randomNumber = Math.floor(Math.random() * 100) + 1;
//   console.log(randomNumber);
// }

// randomNumber();

// function randomNumbers(int) {
//   for (let i = 0; i < int; i++) {
//     var randomNumber = Math.floor(Math.random() * 100) + 1;
//     console.log(randomNumber);
//   }
// }

// randomNumbers(80);

// function skips(ar) {
//   var newAr = [];
//   for (let i = 0; i < ar.length; i += ar[i]) {
//     newAr.push(ar[i]);
//   }
//   console.table(newAr);
// }

// skips([2, 1, 1, 1, 4, 4, 23, 3, 2, 2, 6, 4, 4, 4, 4, 2, 4]);

function fizzBuzz(ar) {
  let newAr = [];
  ar.forEach((int) => {
    if (int % 3 === 0 && int % 5 === 0) {
      newAr.push("FizzBuzz");
    } else if (int % 3 === 0) {
      newAr.push("Fizz");
    } else if (int % 5 === 0) {
      newAr.push("Buzz");
    } else {
      newAr.push(int);
    }
  });
  console.log(newAr);
}

fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17]);
