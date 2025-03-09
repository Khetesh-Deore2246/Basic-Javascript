const user={
    username:"khetesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} , Welcome to my hood`);
        //console.log(this)
    }
}

// user.welcomeMessage()
// user.username="Pramod";
// user.welcomeMessage()

function chai(){
    let username="Khetesh";
    console.log(this.username);  // do not use the this keyword in the  function , use in Objects
}

//chai()

const chai1 = function(){
    let username="Khetesh";
    console.log(this.username);
}
//chai1()

const chai2 = ()=>{
    let username="Khetesh";
    console.log(this.username);
}

//chai2()

// const addTwo=(num1,num2)=>{  // explicity return 
//     return num1+num2
// }

//const addTwo=(num1,num2)=> (num1+num2 )  // implicity return  

const addTwo=(num1,num2)=> ({username :"Khetesh"} ) 

console.log(addTwo(2,3))

