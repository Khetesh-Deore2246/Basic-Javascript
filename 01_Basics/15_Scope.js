//global and local scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

//console.log(a)
//console.log(b)
console.log(c);


function one(){
    const username="Khetesh"
    function two(){
        const website ="YT"
        //const username="Deore"
        console.log(username)
    }
    //console.log(website)

    two()
}
one()


if(true){
    const username="Khetesh"
    if(true){
        const web=" YT"
        console.log(username +web)
    }
    
    //console.log(web)
}
//console.log(username)


//+++++++++++++++++++++++++++++ Interesting  +++++++++++++++++++++++++++

// Hoisting

console.log(addone(5))
function addone(num)
{
    return num+1
}


//console.log(addtwo(5))
const addtwo= function(num){
    return num+2
}
console.log(addtwo(5))