const user={
    username:"Sneho",
    price:100,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the Website`);
    }
        
}

/*user.welcomeMessage();
user.username="Bose";
user.welcomeMessage();*/
//console.log(this) // this is a global object so no value

/*function check(){
    console.log(this);
}
check();*/

/*function take(){
    let userid="Sneho";
    console.log(this.userid);
}
take();*/

//when i use the let it store the variable in a local scope so it will not be available in the global scope
//this keyword refers to a local object so when i dont use let it gives a result

//Arrow function
/*const addTwo=(num1,num2)=>{
    return num1+num2;
}*/
// when you give {} you have to use return keyword(explicit return) when you use () you dont have to use return keyword(implicit return)
const addTwo=(num1,num2)=>(num1+num2);
console.log(addTwo(2,3));

const addwo=(num1,num2)=>({usertake:"Sneho"});//for object return () is must
console.log(addwo(2,3));