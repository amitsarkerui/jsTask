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

// Task 3
function MostFrequentElement(numberArrayElement) {
  const frequency = {};

  for (let i = 0; i < numberArrayElement.length; i++) {
    const element = numberArrayElement[i];
    frequency[element] = (frequency[element] || 0) + 1;
  }

  let mostFrequentElement;
  let highestFrequency = 0;

  for (const element in frequency) {
    if (frequency[element] > highestFrequency) {
      highestFrequency = frequency[element];
      mostFrequentElement = element;
    }
  }

  return parseInt(mostFrequentElement);
}

const numArrInput = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const outputTask3 = MostFrequentElement(numArrInput);
console.log(outputTask3);
