
let arr = [1,2,3,1,1,1,4,5]
  
function myFilter(arr){
let filtered = arr.filter((item,index) => arr.indexOf(item) === index)
return filtered
}
 console.log(myFilter(arr))