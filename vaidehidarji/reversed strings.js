// JavaScript source code
function solution(str){
   var words = str.split(" ");     //split function

  var newSentence = words.map(function(str){   //map function

    if(str.length >= 5){

      var reversed = "";

      for(var i = str.length-1; i >= 0; i--)       //for loop
      {  
        reversed += str[i];
      } return reversed;
    } 
    else{

      return str;
    }
  });
  return newSentence.join(" ");
}
