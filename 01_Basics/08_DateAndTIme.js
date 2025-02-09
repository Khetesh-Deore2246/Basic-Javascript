// Dates

let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log( typeof myDate)

//let myCreatedDate = new Date(2025,0,9)
//console.log(myCreatedDate.toDateString())

//let myCreatedDate = new Date(2025,0,23,5,3)
//console.log(myCreatedDate.toLocaleString())

//let myCreatedDate = new Date("2025-01-14")
let myCreatedDate = new Date("01-14-2025")
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

console.log(Math.round(Date.now()/1000)) // time in milliseconds

let newDate =new Date()
console.log(newDate)
console.log(newDate.getTime())
console.log(newDate.getFullYear())
console.log(newDate.getMonth())

newDate.toLocaleString('default',{
     weekday:"long"
      }
)