// Function fo Find Maximum Value

function findMaxValue(arr) {
  return Math.max(...arr);
}

// Example usage:
const numbers = [5, 9, 3, 6, 2, -3, 2, 8, 10];
const maxValue = findMaxValue(numbers);
console.log("Array:", numbers);
console.log("Maximum value:", maxValue);

// Function fo Find Minimum Value

function findMinValue(arr) {
  return Math.min(...arr);
}

// Example usage:
const minValue = findMinValue(numbers);
console.log("Array:", numbers);
console.log("Minimum value:", minValue);
