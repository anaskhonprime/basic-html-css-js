/*****   Getting random number between  two values     *******/

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomNumber(1, 20));

/*****   Getting integer random number between  two values     *******/

function setRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.random() * (max - min) + min;
}

/*****   BMI Calculator     *******/

function bmiCalculator(weight, height) {
  var interpretation = weight / (height * height);
  return interpretation;
}

var result = bmiCalculator(70, 1.76);
result = Math.floor(result, 0.1);

if (result < 18.5)
  console.log("Your BMI is " + result + " so you are underweight.");
else if (result >= 18.5 && result <= 24.9)
  console.log("Your BMI is " + result + " so you have a normal weight.");
else console.log("Your BMI is " + result + " so you are overweight.");




/*****  FIZZ BUZZ Challenge   *******/

const arr = [];

for (var i = 1; i <= 100; i++) {
  arr.push(i);
}

for (var i = 1; i <= arr.length; i++) {
  if (arr[i] % 15 === 0) {
    arr[i] = "FizzBuzz";
  } else if (arr[i] % 3 === 0) {
    arr[i] = "Fizz";
  } else if (arr[i] % 5 === 0) {
    arr[i] = "Buzz";
  } else console.log("Error");
}

console.log(arr);

/*****  FIZZ BUZZ Challenge   *******/




/*****  Random item of array   *******/

function randomItem(item) {
  var arrLength = item.length;
  // get array length for using math.random max value and here starting number is 0

  var randomItemPosition = Math.floor(Math.random() * arrLength);
  // get random number as integer number using math floor() and math random

  var randomIndex = item[randomItemPosition];
  // set random number with as index of an array

  return randomIndex + " here the random number";
}

const people = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
var getItem = randomItem(people);

console.log(getItem);

/*****  Random item of array   *******/



/*****  Fibonacci Sequence  *******/

function fibonacciGenerator(n) {
  var output = [];

  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }

  return output;
}

var resultMe = fibonacciGenerator(10);

console.log(resultMe);

/*****  Fibonacci Sequence  *******/
