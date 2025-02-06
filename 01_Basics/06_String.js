const name ="Khetesh"
const no=10

//console.log(name +no +" Value")

console.log(`Hello my name is ${name} and my Roll no. is ${no}`)  //morden method
//Othe way to declare the string is
const gamename =new String('Khetesh-s-d-com')
console.log(gamename[0]);
console.log(gamename.__proto__);  // object show
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.toLowerCase())
console.log(gamename.toLocaleLowerCase())
console.log(gamename.charAt(3))
console.log(gamename.indexOf('t'))


const newString =gamename.substring(0,4)
console.log(newString)

const anotherString =gamename.slice(-8,4)
console.log(anotherString)

const newStringOne ="    Khetesh     " //Works on white space
console.log(newStringOne)
console.log(newStringOne.trim())

const url ="https://khetesh.com/khetesh%20deore"
console.log(url.replace('%20','-'))
console.log(url.includes('khetesh'))

console.log(gamename.split('-'))  
