function myfun1 ()
{
    console.log("Khetesh Deore ")
}

//myfun1()

function loginUserMessage (username){
    if(!username){
        console.log("Please enter the a username")
        return 
    }
    return `${username} just logged  in`
}
//console.log(loginUserMessage("khetesh"))

function calculateCartPrice(val1,val2,...num1)
{
return num1
}
console.log(calculateCartPrice(100,200,300,4000,500))

const user ={
    username:"Khetesh",
    price:199
}
function handleObject(anyonject){
    console.log(`Username is ${anyonject.username} and price is ${anyonject.price}`)
}
//handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const MyNewArray=[200,400,100,600]
function returnSecondValue(getarray){
    return getarray[1]
}

//console.log(returnSecondValue(MyNewArray))
console.log(returnSecondValue([100,200,300,400]))