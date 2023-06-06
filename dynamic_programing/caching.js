#!/usr/bin/env node

//normal function
function addTo80(n){
    console.log('long time');
    return n+80;
}

let cache ={};
//optimized application that does not repeat identical calculation
function memoizedAddTo80(n){
    if (n in cache) {
        return cache[n];
    }else {
        console.log('long time M');
        cache[n] = n+80;
        return cache[n];
    }
}

console.log(addTo80(5));
console.log(addTo80(5));
console.log(addTo80(5));

console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));