function arrayPlusArray(arr1, arr2) {

  let a = 0,b=0
for (let i = 0; i < arr1.length; i++) {
  a += arr1[i] //sum of array 1 using for loop
  }
  for (let i = 0; i < arr2.length; i++) {
  b += arr2[i] //sum of array 2 using for
  }
  return a+b; //sum of 2 arrays
}