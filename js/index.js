const action = prompt('Что вы хотите сделать? (+, -, *, /):');

const num1 = Number(prompt('Введите первое число:'));

const num2 = Number(prompt('Введите второе число:'));

let result;

if (action === '+') {
	result = num1 + num2;
} else if (action === '-') {
	result = num1 - num2;
} else if (action === '*') {
	result = num1 * num2;
} else if (action === '/') {
	result = num1 / num2;
} 

if (result !== undefined) {
	alert(`${num1} ${action} ${num2} = ${result}`)
} else {
alert('Введите то что нужно!')
}


g