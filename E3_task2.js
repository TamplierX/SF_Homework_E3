function getPrimeNumber(number) {

    let count, result;
    count = 0;

    if (typeof(number) === 'number' && !isNaN(number) && number >= 1 && number <= 1000) {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count++;
            }
        }
        if (count === 2) {
            result = `Число ${number} - простое число.`;
        } else {
            result = `Число ${number} - составное число.`;
        }
    } else {
        result = 'Данные не верны!';
    }
    return result;
}

console.log(getPrimeNumber(5));
