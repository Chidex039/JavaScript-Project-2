function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Condition: Filter out odd numbers
const isEven = (num) => num % 2 === 0;

const evenNumbers = filterArray(numbers, isEven);
console.log("Original array:", numbers);
console.log("Filtered array (only even numbers):", evenNumbers);
