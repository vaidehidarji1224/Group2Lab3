function sort(sentence){
let n;
let arr= sentence.split(' ')   //split the sentence
let low=arr.filter((v) => v[0].match(/[a-z]/)).sort(); //filter lower case letters
let up=arr.filter((v) => v[0].match(/[A-Z]/)).sort().reverse(); // filter upper case and reverse
let combine=low.concat(up).map((v)=> v.replace(/\W/,''))  //concat, replace and using map function
let h=combine.join(' ') //join the elements in array again
 n=h.length; // length of array
let t=h.slice(0, n); //display upto last string based on length
return t;

}