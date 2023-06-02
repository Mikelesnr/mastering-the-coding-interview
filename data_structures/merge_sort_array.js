#!/usr/bin/env node

function mergeSortArr(arr1=[],arr2=[]){
    let joinedArr = [];
    if (arr1.length === 0){
        joinedArr = arr2;
    }else if(arr2.length === 0){
        joinedArr = arr1;
    }else{
        joinedArr = arr1.concat(arr2);
    }
    for (let i = 0 ; i < joinedArr.length; i++ ){
        for(let j = i+1; j < joinedArr.length; j++){
            if(joinedArr[i] > joinedArr[j]){
            let temp = joinedArr[i];
            joinedArr[i] = joinedArr[j];
            joinedArr[j] = temp;
            }
        }
    }
    return joinedArr;
}

arr1 = [1,2,3,4,5,6];
arr2 = [9,8,7,6,5,4,3];

console.log(mergeSortArr(arr1,arr2));