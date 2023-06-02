#!/usr/bin/env node

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(arr) {
    let temp;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1; j++){
            if (arr[j]>arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;

}

bubbleSort(numbers);
console.log(numbers);