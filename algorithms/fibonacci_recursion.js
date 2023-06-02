#!/usr/bin/env node

function fibonacciRecursive(index){
    if (index <= 1)return index;

    return fibonacciRecursive(index-1)+fibonacciRecursive(index-2);
}


function fibonacciIterative(index){
    if (index <= 1)return index;

    const sequence = {0:0,1:1}; 

    for (let i = 2; i <= index ; i++){
        sequence[i]=(sequence[i-1]+sequence[i-2])
    }
    return sequence[index];
} 

function printSequence(index, callback){
    const sequence = [];
    if (typeof callback === "function"){
        for(let i = 0; i <= index; i++){
            sequence.push(callback(i));
        }
        console.log(sequence);
    }else{
        return "please enter function on second parameter"
    }
}

printSequence(9, fibonacciRecursive);
printSequence(9, fibonacciIterative);