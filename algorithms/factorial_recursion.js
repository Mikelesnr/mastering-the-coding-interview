#!/usr/bin/env node

// factorial with recursion

function factorialRecursive(num) {
    //check number is int
    if (!(typeof num === "number")){
        return "value entered not number";
    }

    //base case
    if (num <= 2){
        return num;
    }

    //recursive case
    return num * factorialRecursive(num-1);
}

console.log(factorialRecursive(3));
console.log(factorialRecursive(5));

function factorialIterative(num) {
    let factorial = 1;
    if (num <= 1) return num;
    while (num >= 2) {
        factorial = factorial* num;
        num--;
    }
    return factorial
}

console.log(factorialIterative(3));
console.log(factorialIterative(5));