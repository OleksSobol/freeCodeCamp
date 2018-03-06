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
	return arr;
}
sumFibs(4);