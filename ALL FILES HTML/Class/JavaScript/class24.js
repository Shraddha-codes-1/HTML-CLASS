// Objects 
// How the user looks like : 
let user={
    firstname:"Shraddha",
    lastname:"raghuvanshi",
    email:"abc@gmail.com",
    age:18,
    mobile:123456789,
    isadult:true
}
console.log("OBJECT user ", user);
for(let key in user){
    console.log("key : ", key , "|| value : ", user[key]);
}

// title 

// let inp = prompt("Enter input : ");
// let out=" ";
// for(let i in inp){
//     if(i==" "){
//         inp[i+1].toUpperCase;
//         out+=i;
//     }
//     else{
//         out+=i;
//     }
// }
// console.log(out);

//array reverse

// let arr1 =[1,2,3,4,5];
// let arr2=[];
// for( let i=arr1.length;i>0;i--){
//     arr2.push(i);
// }
// console.log(arr2);

// let inputarr1=prompt("enter array 1 ");
// let inputarr2=prompt("enter arr 2")

let user2={
    firstname:"conrad",
    lastname:"fisher",
    email:"abc@gmail.com",
    age:18,
    mobile:123456789,
    isadult:true,
    greet: function(){
        console.log("Cousin BeacHouse   ");
    },
    adress:{
        Country:"US",
        State:"Maine",
        City:"Cousin Island "
    }
}
console.log(user2);
console.log("greeting",user2.greet());
console.log(user2.adress.Country);

//CSS
//Natasha
//Alpha
//
//Lead is Steve 
