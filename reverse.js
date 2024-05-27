function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
const inputString = "Hello, World!";
const reversedString = reverseString(inputString);

// console logs
console.log("Original string:", inputString);
console.log("Reversed string:", reversedString);
