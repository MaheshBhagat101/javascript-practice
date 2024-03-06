// primitive=> call by value
// 7 Types- string, Number, Boolean, Null, undefiend, Symbol, BigInt(to store large values)

//js is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); //they can have same symbols but the values stored in it will be different


// Non-primitive => call by refenrence
// Types- array,objects,functions
// Every vriable here return typeof object

const heros =["luffy","zoro","sanji"]; //-> arrays
let myObj={
    name : "Mahesh", //-> objects
    age : "24",
}

const MyFunction = function(){
    console.log("Hey Mahesh") 
}

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  object function
//        Object  =>  object

