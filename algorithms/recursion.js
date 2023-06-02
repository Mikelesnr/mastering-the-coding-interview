#!/usr/bin/env node

let counter = 0;
function inception () {
    console.log(counter);
    if (counter > 3) {
        return "done!";
    }
    counter ++;
    return inception();
}

console.log(inception());

//rules
//1. identify base case
//2. identify recursive case
//3. get closer and closer and return when needed. you usually have two returns