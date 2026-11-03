let user=prompt("Enter your input ");
let arr=[];
let str="";
for(let i=1;i<=user;i++){
    for(let j=1;j<=i;j++){
        str=str+j+" ";
    }
    arr.push(str);
}
for(let l=0; l<arr.length;l++){
    console.log(arr[l]);
}