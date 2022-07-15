const assignment = require('../src/assignment.js');

const  sumOfNumbers  = assignment;
const maybe = sumOfNumbers === undefined ? test.skip : test;

maybe('Challenge - 1 : my sumNumbers function can sum an array of numbers', () =>) {
    @param{Array}arrayofnumbers the array of numbers to sum
  *@returns number the sum of thenumbers
  */
    *//let numbers the sum of the numbers=[1,2,5,6,7,8];
      function
      sumofnumbers(arrayofnumbers){
        let sum= arrayofnumbers.reduce((a,b)=>a+b);
        return sum;
        
      }
    