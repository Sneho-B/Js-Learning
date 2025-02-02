// Filter fucntion
//always return an array
//always requires a condition
const MyNums=[1,2,3,4,5,6,7,8,9,10];
//const newNums=MyNums.filter((num)=>num%2==0);
//console.log(newNums);

//Map function
//const newNums=MyNums.map((num)=>num+10);
/*const newNums=MyNums.map(
    (num)=>num+10)
    .map((num)=>num-0.5)//oporer map er result er upor kaj korbe
    .filter((num)=>num>13) 
console.log(newNums);*/

// const myTotal=MyNums.reduce(function(acc,currVal){
//     return acc+currVal
// },2)
// const myTotal=MyNums.reduce((acc,currVal)=>acc+currVal,0)
// console.log(myTotal);
const shoppingCart=[
    {course:"JavaScript",price:1100},
    {course:"Python",price:1200},
    {course:"Ruby",price:1350},
    {course:"Java",price:1550}
]
const total=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(total);




