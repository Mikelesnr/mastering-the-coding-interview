#!/usr/bin/env node

const arr1=[1,2,3,4,5,6,2,7,1,8,9,];

function firstRecurring(arr){
    const filter = {};
    for (let i = 0; i < arr.length; i++){
        if(i !== 0){
            if (filter[arr[i]]){
                return `first recuring number is ${arr[i]}`;
            }
        }
        filter[arr[i]] = true;
    }
    return 'unefined';
}

console.log(firstRecurring(arr1));