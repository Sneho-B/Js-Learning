/*function addNum(num1,num2){
    //console.log(num1+num2)
    return num1+num2;
    return res;
}

const res=addNum(2,3) // 5
console.log(res);*/
//function priceofcar(...num){
    //return num
//}
//console.log(priceofcar(200,300,400))
const user ={
    name: "Sneho",
    price: 200
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

handleObject(user) // Username is Sneho and price is 200
handleObject({
    name: "Bose",
    price: 400
})

