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
console.log(loginUserMessage("khetesh"))
