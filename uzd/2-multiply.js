console.clear();

function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras ne skaicius';
    }
    if (!isFinite(a)) {
        return 'ERROR: pirmas parametras turi buti tikras skaicius';
    }

    if (typeof b !== 'number') {
        return 'ERROR: antras parametras ne skaicius';
    }
    if (Math.abs(b) === Infinity) {
        return 'ERROR: antras parametras negali buti Infinity';
    }
    if ('' + b === 'NaN') {
        return 'ERROR: antras parametras negali buti NaN';
    }

    const result = a * b;
    return result;
}

// tipai
console.log(multiply('labas', 5));
console.log(multiply(5, 'labas'));
console.log(multiply('labas', 'rytas'));
console.log(multiply(7, false));
console.log(multiply(true, 5));

// ne skaicius
console.log(multiply(Infinity, 5));
console.log(multiply(5, Infinity));
console.log(multiply(Infinity, Infinity));
console.log(multiply(-Infinity, 5));
console.log(multiply(5, -Infinity));
console.log(multiply(-Infinity, -Infinity));

console.log(multiply(NaN, 5));
console.log(multiply(5, NaN));
console.log(multiply(NaN, NaN));

// ne tipai
console.log(multiply([], 1));
console.log(multiply([], []));
console.log(multiply(2, []));

console.log(multiply({}, 1));
console.log(multiply({}, {}));
console.log(multiply(2, {}));

console.log(multiply(multiply, 1));
console.log(multiply(multiply, multiply));
console.log(multiply(2, multiply));

// ok
console.log(multiply(7, 5));
console.log(multiply(-7, 5));
console.log(multiply(-7, -5));
console.log(multiply(7, -5));