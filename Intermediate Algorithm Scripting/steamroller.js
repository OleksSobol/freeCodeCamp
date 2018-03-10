 
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flat = [];
 
  arr.forEach(function flatted(args){
    if(!Array.isArray(args)){
      flat.push(args);
    }
    else{
      for(var item in args){
        flatted(args[item]);
      }
    }
  });
  
  return flat;
}

steamrollArray([1, [2], [3, [[4]]]]);
