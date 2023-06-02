#!/usr/bin/env node

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for( let i=0; i<array.length-1; i++){
        let replace_index = i;
        let min = array[i];
        let holding_index;
        for( let j=i+1; j<array.length; j++){
            if (array[j]<min){
                holding_index = j;
                min = array[j]
            }

        }
        if(array[i]>min){
            let temp = array[holding_index];
            array[holding_index] = array[i];
            array[i] = temp;
        }
    }
  
}

selectionSort(numbers);
console.log(numbers)