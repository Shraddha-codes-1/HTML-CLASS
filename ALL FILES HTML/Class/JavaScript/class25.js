// //creaitng a object
// //==========================================

// let user={
//     name:"Aarav",
//     age:20,
//     course:"B.tech CSE",
//     subjects :["DSA","Web Dev","Math"],
//     isEnrolled:true
// }


// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.subjects[1]);
// console.log(user["course"]);
// user.graduationKey=2026;
// user.isenrolled=false;
// user.age=20;
// delete user.name;
// console.log(user);


let contacts=[
    {
        firstname:"harry",
        number:"2333"
},
{
    firstname:"sherlock",
    number:"4335"
}
];

function lookUpProfile(inp,num){
    for(let i =0; i<contacts.length() ;i++){
        if(contacts[i][0]==null){
            console.log("No such contact ")
        }
        if(contacts[i][1]==null){
            console.log("No such property ")
        }
        else{
        console.log("name : ",contacts[i] ,"number :",contacts[i+1]);
    }
    }
}
let inp=prompt("enter name : ");
let num = prompt ("enter number : ");
lookUpProfile(inp,num);
