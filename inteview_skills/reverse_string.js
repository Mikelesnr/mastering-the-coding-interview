#!/usr/bin/env node

//Create a function that reverses a string;
//'Hi My name is Michael" should be;
//'leahciM si eman ym iH'

function reverseStr(str){
    var array = str.split('');
    var arrReversed = [];
  
    for(var i = 0; i < array.length; i++){      
        arrReversed.unshift(array[i]);
    }

    return arrReversed.join('');
    
}

var myStr = "leahciM si eman yM iH";
var myStrReversed = reverseStr(myStr);

console.log(myStrReversed);