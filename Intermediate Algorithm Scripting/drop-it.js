
function dropElements(arr, func) {
  var leng = arr.length;
  for(var i = 0; i < leng; i++){
    if(func(arr[0])){
     break;
    }
    else{
       arr.shift();
    }
  }
  
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
