var arr = process.argv;
var n = arr.length;
var sum = 0;
for (var i = 2; i < n; i++){
	sum += +arr[i];
}
console.log(sum);