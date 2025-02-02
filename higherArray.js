/*const name="Snehoritro"
for (const charec of name) {
    console.log(charec)
}*/
const map = new Map();
map.set("In", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("In","India");
//console.log(map);
/*for (const [key, value] of map) {
    console.log(key,":-", value);
}*/

const myObject={   
    cpp:"C ++",
    js:"Java Script",
    rb:"Ruby",
    py:"Python"
}
/*for (const key in myObject){
    console.log(myObject[key]); 
}*/

//for in loop is used to get the keys esp used in objects 
//for of loop is used to get the values esp used in arrays and maps

const coding=["js","cpp","rb","py"];

/*coding.forEach( function(val, index) {
    console.log(index+1,val," is a programming language");
    
})*/
/*coding.forEach((item)=>{
    console.log(item);
});*/
/*function PrintMe(item){
    console.log(item);
}
coding.forEach(PrintMe);*/
/*const MyCoding=[
    {
        LanguageName:"javascript",
        LangFile:"Js"
    },
    {
        LanguageName:"C++",
        LangFile:"Cpp"
    },
    {
        LanguageName:"Ruby",
        LangFile:"Rb"
    },
    {
        LanguageName:"Python",
        LangFile:"Py"
    }
]

MyCoding.forEach((item)=>{
    console.log(item.LanguageName);
})*/
//forEach return no value
//filter map
const myNums=[1,2,3,4,5,6,7,8,9,10];

//const newNums=myNums.filter((num)=>num%2==0);
/*const newNums=myNums.map((num)=>{
    return num*2 
    //single line command ae return use korte hoye na
    
    //jokhon e object er moddhe dhokacchi{} tokhon return keyword use korte hobe
});
console.log(newNums);*/
const myNewNums=[]
myNums.forEach((nums)=>{
    if (nums>4){
        myNewNums.push(nums*2);
    }
    
})
console.log(myNewNums);
