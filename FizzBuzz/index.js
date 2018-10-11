const testNumber = 10;
console.log(fizzBuzz(testNumber)); //Calling Function
function fizzBuzz () { //These match order of logic
  if ((testNumber % 3 === 0 ) && (testNumber % 5 === 0)) return 'FizzBuss';
  if (testNumber % 5 === 0) return 'Buzz';
  if (testNumber % 3 === 0) return "Fizz";
  if (typeof input !=='number') return 'This is not a number.'; //Change to NaN
  return "This test number does nothing important. The input was " + input + ".";
}
