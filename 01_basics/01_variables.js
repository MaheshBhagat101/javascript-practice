const accountId=2342342
let accountEmail="mahesh@gmail.com"
var accountPassword="93428"
accountCity="pune"

let accountState; // if no value is given than it will show undefiened

//accountId=03498// not allowed, cuz u cannot change a const value once its assigned.

console.log(accountId) //to run a single variable

//lets try changing values of other non-const variable//

accountEmail="sdjkf@gmail.com"
accountPassword="6515"
accountCity="sdjh"

/*
prefer not to use var
bcz of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])
