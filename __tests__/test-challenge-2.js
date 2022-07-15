const assignment = require('../src/assignment.js');

const countEvenNumbers  = assignment;
const maybe = countEvenNumbers === undefined ? test.skip : test;

maybe('Challenge - 2 : my countEvenNumbers function can count even numbers in array of numbers', () => {
    function
      countevennumbers(arrayofnumbers){
        let even=
          arrayofnumber.filter((num)=>num%2==0)
        return even.length;
      }