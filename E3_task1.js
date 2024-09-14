function getTypeOfNumbers() {
    const arr = [0, null, NaN, 0, 1, 2, 4, "str"]

    let even = 0,
        odd = 0,
        zero = 0;

    arr.forEach(function(item) {
        if (typeof(item) === 'number' && !isNaN(item)) {
            if (item === 0) {
                zero += 1;
            } else if (item % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }
        }
    })

    console.log('четных элементов: ', even)
    console.log('нечетных элементов: ', odd)
    console.log('нулей: ', zero)
}

getTypeOfNumbers();
