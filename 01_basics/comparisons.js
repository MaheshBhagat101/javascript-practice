//for String values
// console.log("2" > 1);
// console.log("02">1);

//for null values
// console.log(null>0); false
// console.log(null==0); false
// console.log(null>=0); true
//The reason is that equlity check == and comparisions >< >= <= work differently.
//comparisions convert null to a number,treating it as a 0.
//That's why null>0 is false and null>=0 is true.

// for "===" , it will strictly check the comparison,
//it'll also check the data type of the variables.
console.log("2"===2);
