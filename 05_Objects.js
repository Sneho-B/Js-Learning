//object literals
const mysym =Symbol("mykey1")
const JsUser={
    fullname:{
        firstname: "Sneho",
        lastname: "Bose"
    },
    [mysym]: "key1",
    age: 18,
    email: "snehobose2005@gmail.com",
    LoggedIn: false
}
console.log(JsUser["email"])
console.log(JsUser[mysym])
console.log(typeof JsUser[mysym])
JsUser.email="snehobjs1749@gmail.com"
Object.freeze(JsUser)
JsUser.email="bsneho2005@gmail.com"
console.log(JsUser)
JsUser.greetings= function(){
    console.log("this is a new function")
}
JsUser.greetins2= function(){
    console.log(`Hello this is , ${this.name}`)
}
console.log(JsUser.greetings())
console.log(JsUser.greetins2())
console.log(JsUser.fullname);

const obj1={1: "a", 2: "b"};
const obj2={ 3: "c", 4: "d"};
const obj3=Object.assign({}, obj1, obj2); //obj1 acts ar target all the rest after that are stored in obj1
const obj3={...obj1,...obj2};
console.log(obj3);




