function getRandom (max) {
  return parseInt(Math.random() * max);
}

const maxSizeArray = 10;

function findValue (array, i, value) {
  if (array[i] == value) {
    return true;
  }
  
  if (i + 1 >= maxSizeArray) {
    return false;
  }
  
  return findValue(array, i + 1, value);
}

var randomArray = [];
var output = '';
for (i = 0; i < maxSizeArray; i++) {
  randomArray[i] = getRandom(15);
  output += randomArray[i] + ' ';
}
console.log('Filled random array: ');
console.log(output);

(function () {
  output = '';
  const searchValue = +prompt('Введите искомое число:', 0);
  
  if (isNaN(searchValue) || searchValue < 0) {
    alert('Вводимое число не является положительным целым числом!');
    return;
  }
  
  var isFound = false;
  
  const way = 2;
  
  if (way == 0) {
    isFound = findValue(randomArray, 0, parseInt(searchValue));
  }
  else if (way == 1) {
    randomArray.forEach(function (value) {
      if (value == searchValue) {
        isFound = true;
        output = 'Element ' + searchValue + ' is found!';
        return false;
      }
    });
  }
  else if (way == 2) {
    for (i = 0; i < maxSizeArray; i++) {
      if (randomArray[i] == searchValue) {
        isFound = true;
        output = 'Element ' + searchValue + ' is found!';
        break;
      }
    }
  }
  
  if (isFound) {
    output = 'Element ' + searchValue + ' is found!';
  }
  else {
    output = 'Element ' + searchValue + ' not found!';
  }
  
  console.log(output);
})();