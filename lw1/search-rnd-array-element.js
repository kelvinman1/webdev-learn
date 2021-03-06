﻿function getRandom (max) {
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
  let searchValue = prompt('Введите искомое число:', 0);
  if (searchValue === null){
    alert('Произведена отмена!');
    return;
  }
  searchValue = searchValue.split('');
  let clearedSearchValue = '';
  searchValue.forEach(function (ch) {
    if (ch != ' ') {
      clearedSearchValue += ch;
    }
  });
  
  if (clearedSearchValue === '') {
    alert('Вводимое значение не является положительным целым числом!');
    return;
  }
	
  searchValue = +clearedSearchValue;
  
  if (isNaN(searchValue) || searchValue < 0) {
    alert('Вводимое значение не является положительным целым числом!');
    return;
  }
  
  if (findValue(randomArray, 0, parseInt(searchValue))) {
    output = 'Element ' + searchValue + ' is found!';
  }
  else {
    output = 'Element ' + searchValue + ' not found!';
  }
  
  console.log(output);
})();