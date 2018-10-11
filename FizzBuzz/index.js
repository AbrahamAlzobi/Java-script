const testNumber = 15
console.log(fizzBuzz(15)); //Calling Function
console.log(fizzBuzz(10));
function fizzBuzz () { //These match order of logic
  if (15 % 3 === 0) return "Fizz";
  if (10 % 5 === 0) return 'Buzz';
  if ((15 % 3 === 0 ) && (10 % 5 === 0)) return 'FizzBuss';
  if (typeof input !=='number') return 'This is not a number.'; //Change to NaN
  return "This test number does nothing important. The input was " + input + ".";
}
