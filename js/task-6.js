let input;
const numbers = [];
let total = 0;

do {
    input = prompt('Введите число');

        if (isNaN(input) === true) {
            alert('Было введено не число, попробуйте еще раз.');
    } else { numbers.push(input) }
    
} while (input !== null);

for (let number of numbers) {
    total += Number(number);
}

console.log(`Общая сумма чисел равна ${total}`);