function getRandom(max)
{
  return parseInt(Math.random() * max);
}

const n = 10;

function findValue(arr, i, value)
{
	if (arr[i] == value)
		return true;
	
	if (i + 1 >= n)
		return false;
	
	findValue(arr, i + 1, value);
}

var a = [];
var out = '';
for (i = 0; i < n; i++){
	a[i] = getRandom(15);
	out += a[i] + ' ';
}
console.log('Filled random array: ');
console.log(out);

(function ()
{
	out = '';
	var isFound = false;
	const k = prompt('Введите искомое число:', 0);
	if ((k == 0 || k ^ 0 == k) && k >= 0) ;
	else{
		alert('Вводимое число не является положительным целым числом!');
		return;
	}
	
	if (findValue(a, 0, k))
		out = 'Element ' + k + ' is found!';
	else
		out = 'Element ' + k + ' not found!';
	
	console.log(out);
})();