//declaration 
function myfn(){
    console.log("hello");
}
//call the function (invocation)
myfn();

//with parameters 

function para(a,b){
    console.log(a+b);
}
console.log("before");
para(10,20);
console.log("after");

//with return 

function ret(num){
    let check= num%2==0;
    return check;
}
let res=ret(10); //to get value 
console.log("before");
console.log("result : ",res);
console.log("after");
