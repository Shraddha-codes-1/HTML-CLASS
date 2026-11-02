// //Intro to JAVASCRIPT
// // this is how u print in js
console.log("Hello");
let digit;
digit=108;
console.log("output",digit);
//float
let digit2;
digit2=108.45;
console.log("output",digit2);
//double
let digit3;
digit3=3577845.587785;
console.log("output",digit3);
//string
let string;
string="Shraddha";
console.log("output --> ", string);
//boolean
let tf;
tf=true;
console.log("output",tf);
//null
let emp;
emp=null;
console.log("output",emp);
// QUESTION
let num;
num=1;
while(num<=20){
    if(num%3==0 && num%5==0){
    console.log("FizzBuzz");
    }   
    if(num%3==0){
    console.log("Fizz");
    }
    if(num%5==0){
    console.log("Buzz");
    }
    if(num%3 !=0 && num%5!=0){
        console.log(num);
        }
    num=num+1;
}       
let arr=[1,2,3,4,5];
console.log("array",arr);
console.log("length --> ",arr.length);
arr.push(12);
console.log("array",arr);
console.log("length --> ",arr.length);
arr.pop();
console.log("array",arr);
console.log("length --> ",arr.length);
arr.shift();
console.log("array",arr);
console.log("length --> ",arr.length);
//sort array 
let arr1=[43,56,28,78];
for(let i=0;i<arr1.length;i++){
    for(let j=i+1;j<arr1.length;j++){
        let temp=arr1[i];
        arr1[i]=arr1[j];
        arr1[j]=temp;
    }
}
console.log(arr1);