function addition(ar) {
  let sum = 0;
  ar.forEach((number) => {
    sum = sum + number;
  });
  return ar;
}

function smallestString(array) {
  let shortest = array[0];
  array.forEach((string) => {
    if (string.split("").length < shortest.split("").length) {
      shortest = string;
    }
  });
  return shortest;
}

function reverseArray(array) {
  let index = array.length - 1;
  let reversed = [];
  while (index >= 0) {
    reversed.push(array[index]);
    index -= 1;
  }
  return reversed;
}

function wordsStartingWithA(array) {
  let counter = 0;
  array.forEach((word) => {
    if (word.split("")[0] === "a") {
      counter++;
    }
  });
  return counter;
}

function joinWords(array) {
  let fullString = "";
  let index = 0;
  while (index < array.length) {
    if (index < array.length - 1) {
      fullString = fullString + array[index] + ", ";
    } else {
      fullString = fullString + array[index];
    }
    index++;
  }
  return fullString;
}

function multiplyArray(array) {
  let product = 1;
  array.forEach((number) => {
    product = product * number;
  });
  return product;
}

function smallestTwoNum(array) {
  let smallestNum = 0;
  let secondSmallestNum = 0;
  if (array[0] < array[1]) {
    smallestNum = array[0];
    secondSmallestNum = array[1];
  } else {
    secondSmallestNum = array[0];
    smallestNum = array[1];
  }
  array.forEach((number) => {
    if (number < smallestNum) {
      secondSmallestNum = smallestNum;
      smallestNum = number;
    } else if (number < secondSmallestNum) {
      secondSmallestNum = number;
    }
  });
  return `The two smallest numbers are ${smallestNum} and ${secondSmallestNum}`;
}

function zeroCounter(array) {
  let zeroes = 0;
  array.forEach((number) => {
    let digits = number.toString().split("");
    for (let i = 0; i < digits.length; i++) {
      if (parseInt(digits[i]) === 0) {
        zeroes++;
      }
    }
  });
  return `The number zero occurs ${zeroes} time(s).`;
}

function biggerThanTen(array) {
  let bigger = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 10) {
      bigger = false;
    }
  }
  if (bigger) {
    return "All numbers are bigger than 10!";
  } else if (!bigger) {
    return "The numbers are not all bigger than 10";
  }
}

function aCounter(array) {
  let aCount = 0;
  for (let i = 0; i < array.length; i++) {
    let letters = array[i].split("");
    for (let j = 0; j < letters.length; j++) {
      if (letters[j] === "a") {
        aCount++;
      }
    }
  }
  return `The letter 'a' appears ${aCount} time(s).`;
}

function graduated(string) {
  if (string === "May 19th") {
    return "YOU'RE DONE!!!";
  }
}

function randomNumber() {
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}

function randomNumbers(int) {
  for (let i = 0; i < int; i++) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
  }
}

function skips(ar) {
  var newAr = [];
  for (let i = 0; i < ar.length; i += ar[i]) {
    newAr.push(ar[i]);
  }
  console.table(newAr);
}

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

function rotate(ar) {
  ar.push(ar[1][1]);
  ar[1][1] = ar[0][2];
  ar[0][2] = ar[0][0];
  ar[0][0] = ar[2][0];
  ar[2][0] = ar[2][2];
  ar[2][2] = ar[1][1];

  ar[1][1] = ar[1][2];
  ar[1][2] = ar[0][1];
  ar[0][1] = ar[1][0];
  ar[1][0] = ar[2][1];
  ar[2][1] = ar[1][1];

  ar[1][1] = ar[3];
  ar.splice(3);

  console.log(ar);
}

// console.log([2, 4, 5, 7, 12]);

// console.log(smallestString(["hey", "hello", "hi", "whats up?"]));

// console.log(sum);

// console.log(reverseArray([2, 4, 6, 3, 8, 9, 11]));

// console.log(wordsStartingWithA(["alabama", "arkansas", "boston", "alaska"]));

// console.log(joinWords(["what", "is", "up", "my", "dude"]));

// console.log(multiplyArray([2, 4, 5, 3, 7]));

// console.log(smallestTwoNum([4, 5, 7, 3, 8, 2, 6]));

// console.log(zeroCounter([12, 300, 0, 60, 23, 500, 2000, 30]));

// console.log(biggerThanTen([12, 14, 34, 56, 78]));

// console.log(aCounter(["apple", "banana", "orange", "tomato"]));

// console.log(graduated("May 19th"));

// randomNumber();

// randomNumbers(80);

// skips([2, 1, 1, 1, 4, 4, 23, 3, 2, 2, 6, 4, 4, 4, 4, 2, 4]);

// fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17]);

// rotate([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);
