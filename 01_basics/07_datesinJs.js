//Date is an object
// In js months start from zero

let myDate = new Date()
// console.log(myDate.toString());           // wed apr 03 2024 
// console.log(myDate.toDateString());      // wed apr 03 2024 
// console.log(myDate.toLocaleDateString());// 4/3/2024\
// console.log(typeof myDate); // object

let myCreatedDate = new Date(2023,0,23) // or u can put exact date
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023


// time
// time is imp bcz it can be used in quizs and another app. to know who gave the answer first.
let myTimeStamp = Date.now()

// console.log(myTimeStamp); // result will be in milliseconds
// console.log(myCreatedDate.getTime()); // time of desired date

// console.log(Math.floor(Date.now()/1000));
//floor used to remove digits after decimal points
//divided by thousand so the answer is in seconds, which makes it easier to comapre with other vlaues.


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // to know what month it is
// +1 is done to provide exact month to the end user, bcz in js the months start from zero

console.log(newDate.getDay()); // to know what date it is




