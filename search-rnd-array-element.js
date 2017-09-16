function getRandom(max)
{
  return parseInt(Math.random() * max);
}
let n = 10;
var a = [];
var out = '';
for (i = 0; i < n; i++){
	a[i] = getRandom(15);
	out += a[i] + ' ';
}
console.log('Filled random array: ');
console.log(out);

out = '';
var isFound = false;
let k = getRandom(15);
for (i = 0; i < n; i++){
	if (a[i] = k){
		isFound = true;
		out = 'Element ' + k + ' is found!';
		break;
	}
}
if (!isFound){
	out = 'Element ' + k + ' not found!';
}
console.log(out);

