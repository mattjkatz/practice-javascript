// // 1

// let array = [2, 4, 5, 7, 12];
// let sum = 0;
// array.forEach((number) => {
//   sum = sum + number;
// });

// console.log(sum);

// 2

function smallestString(array) {
  let shortest = array[0];
  array.forEach((string) => {
    if (string.split("").length < shortest.split("").length) {
      shortest = string;
    }
  });
  return shortest;
}
console.log(smallestString(["hey", "hello", "hi", "whats up?"]));
