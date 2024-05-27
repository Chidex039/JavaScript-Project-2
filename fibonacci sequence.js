function generateFibonacci(numTerms) {
  if (numTerms <= 0) {
    return []; // Return an empty array if the number of terms is less than or equal to 0
  }
  if (numTerms === 1) {
    return [0]; // Return [0] if only one term is requested
  }

  const fibonacciSequence = [0, 1]; // Initialize the sequence with the first two terms
  for (let i = 2; i < numTerms; i++) {
    const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
    fibonacciSequence.push(nextTerm);
  }
  return fibonacciSequence;
}

// Example usage:
const numberOfTerms = 10;
const fibonacciSequence = generateFibonacci(numberOfTerms);
console.log(
  `Fibonacci sequence with ${numberOfTerms} terms:`,
  fibonacciSequence
);
