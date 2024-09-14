function getSumNumber(a) {
    return function (b) {
        return a + b;
    }
}

const resultFunc = getSumNumber(2);
const result = resultFunc(3);

console.log(result);
