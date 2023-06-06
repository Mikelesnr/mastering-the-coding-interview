#!/usr/bin/env node

//normal function
function addTo80(n){
    console.log('long time');
    return n+80;
}

//optimized application that does not repeat identical calculation
function memoizedAddTo80(){
    let cache ={};
    return function(n){
        if (n in cache) {
            return cache[n];
        }else {
            console.log('long time M');
            cache[n] = n+80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();

console.log('1',addTo80(5));
console.log('2',addTo80(5));
console.log('3',addTo80(5));
'1',
console.log('1',memoized(5));
console.log('2',memoized(5));
console.log('3',memoized(5));