function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }
  if (num <= 3) {
    return true; // 2 and 3 are prime numbers
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false; // Multiple of 2 or 3 are not prime
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

// Example usage:
const number = 29;
console.log(`Is ${number} a prime number?`, isPrime(number));
