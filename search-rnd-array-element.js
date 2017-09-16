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

(function (){
	out = '';
	var isFound = false;
	let k = prompt('Введите искомое число:', 0);
	if ((k == 0 || k ^ 0 == k) && k >= 0) ;
	else{
		alert('Вводимое число не является положительным целым числом!');
		return;
	}
	
	for (i = 0; i < n; i++){
		if (a[i] == k){
			isFound = true;
			out = 'Element ' + k + ' is found!';
			break;
		}
	}
	if (!isFound){
		out = 'Element ' + k + ' not found!';
	}
	console.log(out);
})();