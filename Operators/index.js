function simpleOperators (numberA, numberB){
  let adding = numberA + numberB;
  let subtract = numberA - numberB;
  let mutliply = numberA * numberB;
  let divide = numberA / numberB;
  console.log(adding);
  console.log(subtract);
  console.log(mutliply);
  console.log(divide);
}
//Skipcount by ___ for ___ times starting at ___
function skipCounting (skipCount, times, startingNumber){
  let number = startingNumber - skipCount;
  for (let i=1; i<=times; i++){
    number += skipCount;
    console.log(number);
  }
}

//simpleComparison
function howManyTimes (numberStart, numberEnd, skipCount) {
  while (numberStart < numberEnd) {
    console.log(numberStart+= skipCount); // used to be 2 lines ... console.log(number)
    }
  }

// truthy vs falsy example
console.log(1==1); // returns true
console.log('1' == 1) // returns true 
console.log ('1' === 1);//returns false


// let number = [4, 7, 13, 99, 0];
//simpleOperators (number[0], number[1]);
//simpleOperators (number[2], number[3]);
//skipCounting (3, 6, 113);
//skipCounting (8, 11, -351);
//howManyTimes (number[4], number[5], number[6]);
