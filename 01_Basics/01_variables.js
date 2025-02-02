const { access } = require("fs")

const accountId=1444324
let accountEmail="ks@gmail.com"
var accountPassword="564364"
accountCity ="Nashik"
let accountState
//accountId =2 // not allowed 

accountEmail="k@gmail.com"
accountPassword ="343"
accountCity ="Pune"
  // Do not prefer to use of var because of issue in block  scope and functional
console.log(accountId)
console.log([accountEmail,accountPassword,accountCity,accountState]);