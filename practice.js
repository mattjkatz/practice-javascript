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
