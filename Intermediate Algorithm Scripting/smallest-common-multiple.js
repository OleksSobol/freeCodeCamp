
function smallestCommons(arr) {
  
  var arrRange = [];

  for (var i = Math.max(arr[0],arr[1]); i >= Math.min(arr[0],arr[1]); i--) {
   arrRange.push(i);
  }

  function lcm(arr){

    return arr.reduce(function(accum, current){
      return (accum * (current)) / gcd(accum, current); 
    },arr[0]);
  }

  function gcd(a, b){
    if (a === 0 ) {
      return b;
    }
    if (b === 0 ) {
      return a;
    }
    else{
      return gcd(b, a%b);
    }
  }
 

  
  return lcm(arrRange);;
}


smallestCommons([1,5]);

