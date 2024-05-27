// Sum of an Array

function sumArray(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbers);
console.log("Array:", numbers);
console.log("Sum of all elements:", totalSum);
