const arre1 = ["Khetesh", "Pramod "," Sarang " ,"Abhay"]
const arre2 =["Raj", "Aryan","Anup","Om"]
console.log("Arre 1 ",arre1)
console.log("Arre 2 ",arre2)

/*
 arre1.push(arre2)
 console.log("Arre 1 ",arre1)
console.log("Arre 2 ",arre2)
console.log(arre1[4][1])
*/

/*
arre1.concat(arre2)
console.log("Arre 1 on concat  ",arre1)
console.log("Arre 2 ",arre2)
console.log("New Array ",arre1.concat(arre2))
*/

console.log("New Array ",[...arre1,...arre2]) /// spread method for multiple arrays 

const arre3 =[0,1,2,[3,4,5],[6,7,[8,9]]]
console.log("Use of Flat array ",arre3.flat(Infinity))

console.log(Array.isArray(arre1))
console.log(Array.isArray("Khetesh"))
console.log(Array.from("Khetesh"))  //convert in to array 
console.log(Array.from({name:"Khetesh"})) // interesting  return null

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))  //convert in to array 

