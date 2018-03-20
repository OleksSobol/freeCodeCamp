
function sym() {
  var arr = [];
  for(var i = 0; i < arguments.length; i++){
    arr[i] = arguments[i];
  }

  
  function symmetricDif(arr, arr1){
    var res = [];
    for(var i = 0; i < arr.length; i++){
        if(arr1.indexOf(arr[i]) == -1 && res.indexOf(arr[i]) == -1) {
            res.push(arr[i]);        
        }
    }
    
    for(var j = 0; j < arr1.length; j++){
       if(arr.indexOf(arr1[j]) == -1 && res.indexOf(arr1[j]) == -1) {
            res.push(arr1[j]);        
        }      
    }
    return res;
  }
  var SD = arr.reduce(symmetricDif);
  
  console.log();
  
  return SD;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
