//console.log("Mahesh");  // it can be written as 'Mahesh'
const name = "Mahesh"
const repoCount = 10

//console.log(`Hello my name is ${name} and my repocount is ${repoCount}`); // `` => backtick

const gameName = new String("Mahesh_MB_com")

// console.log(gameName[0]);
// console.log(gameName.length); // to know the length of the string
// console.log(gameName.toUpperCase());// to convert the string to upper case
// console.log(gameName.charAt(2));  //to know the location of character in a string
// console.log(gameName.indexOf('e')); // to know the position of a character in a string

const newString = gameName.substring(0, 4) // If -ve value is put here, it'll simply ignore it and consider it as +ve
console.log(newString);

const anotherString = gameName.slice(-8,4)// -ve values also work here
console.log(anotherString);

const newStringone = "   Mahesh   "
console.log(newStringone);
console.log(newStringone.trim());// trim will remove the blank/white space form the string

const url = "https://mahesh.com/mahesh20%bhagat"
console.log(url.replace('20%','--'));

console.log(gameName.split('_'));

