//singleton

 //object.create() 

 //object literals

 const mySym=Symbol("key1")  //symbol

 const JsUser={
    name:"Khetesh",
    "full name" : "Khetesh Samadhan Deore",
    [mySym]:"myKey1",
    age :18,
    location :"Nashik",
    email:"Khetus@gmail.com",
    isLoggedIn:false,
    lastLoginDays :["Monday","tuesday"]
}
/*
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
*/

JsUser.email="khetuess@hotmail.com"
//console.log(JsUser.email)
//Object.freeze(JsUser)
JsUser.email="khetuess@mail.com"
//console.log(JsUser)

JsUser.greeting=function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
