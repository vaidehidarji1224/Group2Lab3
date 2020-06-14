// JavaScript source code
function rowSumOddNumbers(n) {

 let firstdigit= (n * n)-(n-1);
let answer=0;       //declare variable
let count=0;     //count=firstdigit

while (count < n)    //while function 
{             
  if(firstdigit % 2!==0)   //if function call
{
  answer+=firstdigit;
  count++;
}

firstdigit++;

}

return answer;    //reurn value
  }
