function sumFibs(num){
	var first = 1;
	var second = 1;


	var arr = [1];
	var sum = 1;

	var i = 1;

	while(i<=num){
		arr.push(sum);

		sum = first + second;
		first = second;
		second = sum;
		i++;
	}
	arr = arr.filter(function(number){
		return (number % 2);
	});

    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] <= num){
           newArr.push(arr[i]);
        }
    }
    
    sum = newArr.reduce((a, b) => a+b, 0);
	
	return sum;

}
print(sumFibs(1000));
