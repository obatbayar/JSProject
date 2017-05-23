var body = document.getElementById('body');
var h1 = document.createElement('h1');
var input = document.createElement('input');
var textarea = document.createElement('textarea');
var container = document.createElement('DIV');
var row = document.createElement('DIV');
var col = document.createElement('DIV');
var button = document.createElement('button');
var img = document.getElementById('img')

input.setAttribute('id', 'input');
input.className = 'form-control'

textarea.setAttribute('id', 'textarea', 'onclick', 'post()');
textarea.className = 'form-control'

button.setAttribute('id', 'button');
button.className = 'btn btn-default'
button.textContent = 'Click me'

h1.setAttribute('id', 'header')
h1.textContent = 'Khan Academy Comment App';
container.className = 'container';
row.className = 'row text-center';
col.className = 'col-xs-12';


function post() {
	var newContainer = document.createElement('DIV');
	var newRow = document.createElement('DIV');
	var newCol = document.createElement('DIV');
	var inputValue = input.value;
	var textareaValue = textarea.value;
	var newh1 = document.createElement('h1');
	newh1.innerHTML = inputValue;
	var newh5 = document.createElement('h5');
	newh5 = textareaValue;
	newContainer.className = 'container';
	newRow.className = 'row';
	newCol.className = 'col-xs-12';
	newContainer.appendChild(newRow);
	newRow.appendChild(newCol);
	newCol.appendChild(newh1);
	newCol.appendChild(newh5);

	console.log(inputValue);
	console.log(textareaValue);
}

body.appendChild(container);
container.appendChild(row);
row.appendChild(col);
col.appendChild(h1);
col.appendChild(input);
col.appendChild(textarea);
col.appendChild(button);

document.getElementById('button').style.color = '#394551';
document.getElementById('body').style.color = 'white';

function styleFunction () {
	input.style.width = '500px';
	textarea.style.width = '500px';
	textarea.style.height = '100px';
	document.body.style.background = '#394551';
	img.style.width = '250px'
	img.style.height = '250px'

}
styleFunction() 


