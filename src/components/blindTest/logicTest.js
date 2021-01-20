import React from 'react';


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


let arr=[0,1,2,3,4,5,6,7,8,9];
let array=[];
let num =null;
let i = 5;
let algo = 5;


const test=(algo,input)=>{
    if(algo==input){
        ans=true
    }else{
        ans=false
    }
    return ans
}

const CAT=(ans)=>{
    do{
        console.log("")
        if(ans==true){
          array.push(i);
          i++;
            if(array.includes(i)==true){
              i++
              }else{
                    algo = i;
                    console.log("CAT will return ++"+i);
                    console.log("") 
              }
          }else{
            array.push(i);
            i--;
              if(array.includes(i)==true){
                i--;
              }else{
                    algo = i;
                    console.log("CAT will return -- = "+i);
                    console.log("") 
              }
          }
          console.log("values of array = "+array)
          console.log("loop repeated once");
          console.log("")
      }while(array.includes(i)==true);
}

export default CAT
