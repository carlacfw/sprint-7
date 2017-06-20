Solutions of chapter 3 - FUNCTIONS - Book Eloquent JavaScript

MINUMUN
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

RECURSION
var isEven = function(num) {
   num = Math.abs(num); 
   if (num === 0)
     return true;
   else if (num === 1)
     return false;
  else
    return isEven(num -2);
     
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

BEAN COUNTING
function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4