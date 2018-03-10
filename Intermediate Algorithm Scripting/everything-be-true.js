function truthCheck(collection, pre) {
  
  return collection.every(function(item){
    
    console.log("item :",item);
    console.log("item[pre]:", Boolean(item[pre]));
    console.log("====================");
    return (item.hasOwnProperty(pre) && Boolean(item[pre]));
  });
}
truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
