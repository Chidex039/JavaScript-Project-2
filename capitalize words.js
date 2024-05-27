function capitalizeFirstLetterOfEachWord(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Example usage:
const inputSentence = "hello, world! this is a test sentence.";
const capitalizedSentence = capitalizeFirstLetterOfEachWord(inputSentence);

// console logs

console.log("Original sentence:", inputSentence);
console.log("Capitalized sentence:", capitalizedSentence);
