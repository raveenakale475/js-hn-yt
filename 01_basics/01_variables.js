const accountId = 12345
let accountEmail = "raveena@gmail.com"
var accountPassword = "12345"
accountCity = "mumbai"
let accountState;
//  accountId = 2

accountEmail = "rk@gmail.com"
accountPassword = "44444"
accountCity = "hrishikesh"


/*
prefer not to use var
bcoz of issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity]);