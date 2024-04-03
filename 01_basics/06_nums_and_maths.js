const score = 400
// console.log(score);

const balance = new Number(100) //denotes specifically a number is inserted
// console.log(balance);

// console.log(balance.toString().length); 
//by adding toString we can convert a number into a string and can use string methods on that number like .length

// console.log(balance.toFixed(2)); 
// by using this, it'll show the 2 digits after the decimal point or the number of desired digits after decimal can be changed.

const otherNumber = 123.448383
// console.log(otherNumber.toPrecision(3)); 
// toPrecision(3) will provide result for starting 3 digits only and rest will be ignored.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
//toLocaleString is used to know the number of zero's present in the given number by adding commas to it.
//en-IN is used to project the o/p in the indian format.

// +++++++++++ MATHLAB +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// //abs will convert -ve value to +ve value bt not vice-versa

// console.log(Math.round(4.6));
// //round will show the values by the rounding up the values after the decimal point. here it'll be 5.

// console.log(Math.ceil(4.2));
// //ceil will round up the value to the higher number, here it's 5

// console.log(Math.floor(4.9));
// //floor will round up towards the lower value, here it's 4.

// //FOR ARRAY
// console.log(Math.min(4, 2, 5, 8));
// console.log(Math.max(4, 2, 5, 8));

//IMP Random

console.log(Math.random()); 
// this random method provides the random values between 0 to 1.

console.log((Math.random()*10) + 1);
//by doing this, the vlaues will not always start from 0.94858 else it'll start from 9.4858.
// with the help of this we can use in some games where system can provide some values,
// to remove the digits after decimal points, we use "floor method" which will round up the result towards the lower digit, explained beloww....

console.log(Math.floor(Math.random()*10)+1);
// Finaal format to use random in usefull way.

//Example of random

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//(max - min + 1) --> it is used so that the result will be not zero.
// again min is added, so that the answer is in double digit
//Math.floor is used to get the roundup result, avoiding the digits after decimal point.
