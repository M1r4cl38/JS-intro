console.clear();

function numberLength(number) {
    if (typeof number !== 'number' || !isFinite(number)) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }

    const numberAsString = '' + number;
    let count = numberAsString.length;

    if (number % 1 !== 0) {
        count--;
    }

    if (number < 0) {
        count--;
    }

    return count;
}

console.log(numberLength(true));
console.log(numberLength('asd'));
console.log(numberLength(NaN));
console.log(numberLength([]));
console.log(numberLength({}));
console.log(numberLength(undefined));
console.log(numberLength(null));
console.log(numberLength(numberLength));
console.log(numberLength(Infinity));
console.log(numberLength(-Infinity));

console.log(numberLength(5), '->', 1);
console.log(numberLength(781), '->', 3);
console.log(numberLength(37060123456), '->', 11);
console.log(numberLength(3.14), '->', 3);

console.log(numberLength(-5), '->', 1);
console.log(numberLength(-781), '->', 3);
console.log(numberLength(-37060123456), '->', 11);
console.log(numberLength(-3.14), '->', 3);