const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

//console.log(tinderUser)

const regularUser = {
  email: "khetesh@gmail.com",
  userfullname: {
    firstname: "Khetesh",
    lastname: "Deore",
  },
};
//console.log(regularUser.userfullname?.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const onj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
//console.log(obj3)

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))



