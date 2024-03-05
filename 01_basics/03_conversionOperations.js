//FOR NUMBER+ALPHABET
let score="33abc"  // if anything is put under "" this symbol it is considered as string.

// console.log(typeof score);
// console.log(typeof(score)); //can be written in both format

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); //whole value converted into numbers
// console.log(valueInNumber); //not converted, so it shows NAN

//FOR NULL OPERATIONS
let nullValue= null
// console.log(typeof nullValue); //it shows null as an object
// console.log(nullValue);        // it shows null as null

let showInNumber = Number(nullValue)
// console.log(typeof showInNumber);
// console.log(showInNumber);    // it shows null as '0'

//basic conversion; "33"=>33 ; "33abc"=>NaN
//""=>false
//"mahesh"=>true

 
//FOR String
let someNumber=33
let stringNumber=String(someNumber) // here the no. 33 is converted into a string
console.log(stringNumber);       //33
console.log(typeof stringNumber);//string

