//Array
 const myarr = [0,2,4, "Khetesh"]
 //note javascript array are resizable

 console.log(myarr[3])
 //array make shallow copy
const arr2 = new Array(0,1,2,3,4,5)
 console.log(arr2[2])

//  arr2.push(6)
//  arr2.push(0)
//  console.log(arr2)
//  arr2.pop()

//arr2.unshift(9)
 //console.log(arr2)
 //arr2.shift()
 console.log(arr2)
 console.log(arr2.includes(6))
 console.log(arr2.indexOf(3))

 const newarr =arr2.join()
 console.log(  newarr)

 //slice ,splice

 console.log("A", arr2)

 const myn1 =arr2.slice(1,3)
 console.log(  " B ",myn1)
 console.log("A", arr2)

 const myn2 =arr2.splice(1,3)
 console.log(  " C ",myn2) 
 console.log("A", arr2)