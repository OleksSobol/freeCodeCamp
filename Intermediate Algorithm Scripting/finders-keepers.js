
function findElement(arr, func) {
  var num = arr.filter(func);
  return num[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
