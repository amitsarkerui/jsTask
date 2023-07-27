// Task 1

function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}

// Test the function
const stringInput = "hello world";
const outputTask1 = reverseString(stringInput);
console.log("Task 1 output (reverse of string)", outputTask1);

//Task 2
function sumOfPositiveNumbers(numberArray) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      sum += numberArray[i];
    }
  }
  return sum;
}

const numberArrayInput = [2, -5, 10, -3, 7];
const outputTask2 = sumOfPositiveNumbers(numberArrayInput);
console.log("Sum of positive number in assay is : ", outputTask2); // Output: 19
