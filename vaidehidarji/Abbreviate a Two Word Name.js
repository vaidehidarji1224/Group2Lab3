// JavaScript source code

function abbrevName(name){

 var splitName = name.split(' ');    //add split function
  var firstName  = splitName[0][0];  //assign value
  var secondName = splitName[1][0]; 
  return `${firstName}.${secondName}`.toUpperCase();  //return value 
}

