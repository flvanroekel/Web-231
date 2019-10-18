var input = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);
function onClick() {
  var num1 = input[0].value;
  var num2 = input[1].value;
  var sum = num1 + num2;
  label.textContent = num1 + ' + ' + num2 + ' = ' + sum;
}
