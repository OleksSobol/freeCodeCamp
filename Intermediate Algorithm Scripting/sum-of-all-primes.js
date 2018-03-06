
function sumPrimes(num) {
  var sum = 0;
  function isPrime(val){
    for(var i = 2; i < val;i++){
      if(val % i == 0){
        return false;
      }
    }
    return true;
  }
  
  for(var i = 2; i <= num; i++){
    if(isPrime(i)){
      sum+=i;
    }
  }
  
  return sum;
}

sumPrimes(10);
