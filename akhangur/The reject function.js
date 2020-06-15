function reject(array, predicate) {

let a = []; //declared second array
  for(let i = 0; i < array.length; i++) //for loop to pass the condition for every element
  
  if(predicate(array[i]) % 2 === 0) //condition 
  a.push(array[i]); // add the element to new array
  
  return a; //return new array
}