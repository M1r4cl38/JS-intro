console.clear();

function nthString(text, step) {
    if (typeof text !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.'
    }

    if (text.length === 0 || text.length > 100) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio';
    }

    if (typeof step !== 'number') {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    if (!isFinite(step)) {
        return 'Antrasis kintamasis turi buti realus skaicius';
    }
    if (step % 1 !== 0) {
        return 'Antrasis kintamasis turi buti sveikasis skaicius.';
    }

    if (step === 0) {
        return 'Antrasis kintamasis turi būti ne nulis.';
    }
    if (step > text.length) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }

    let ats = '';

    // for (let i = 0; i < text.length; i++) {
    //     const symbol = text[i];
    //     if (i % step === step - 1) {
    //         ats += symbol;
    //     }
    // }

    if (step > 0) {
        for (let i = step - 1; i < text.length; i += step) {
            ats += text[i];
        }
    } else {
        for (let i = text.length + step; i >= 0; i += step) {
            ats += text[i];
        }
    }

    return ats;
}

// console.log(`1562: 2 ==> "${nthString(1562, 2)}"`);
// console.log(`"": 2 ==> "${nthString('', 2)}"`);
// console.log(`"labas": "labas" ==> "${nthString('labas', 'labas')}"`);
// console.log(`"abc": 1.11 ==> "${nthString('abc', 1.11)}"`);
// console.log(`"abc": 0 ==> "${nthString('abc', 0)}"`);
// console.log(`"abc": 4 ==> "${nthString('abc', 4)}"`);
// console.log(`"abcdefghijkl": Infinity ==> "${nthString('abcdefghijkl', Infinity)}"`);
// console.log(`"abcdefghijkl": -Infinity ==> "${nthString('abcdefghijkl', -Infinity)}"`);
// console.log(`"abcdefghijkl": NaN ==> "${nthString('abcdefghijkl', NaN)}" === "cfil"`);

// console.log('-----------');

console.log(`"abcdefg": 1 ==> "${nthString('abcdefg', 1)}" === "abcdefg"`);
console.log(`"abcdefg": 2 ==> "${nthString('abcdefg', 2)}" === "bdf"`);
console.log(`"abcdefghijkl": 3 ==> "${nthString('abcdefghijkl', 3)}" === "cfil"`);
console.log(`"abcdefghijkl": 4 ==> "${nthString('abcdefghijkl', 4)}" === "dhl"`);

console.log(`"abcdefg": -2 ==> "${nthString('abcdefg', -2)}" === "fdb"`);
console.log(`"abcdefghijkl": -3 ==> "${nthString('abcdefghijkl', -3)}" === "jgda"`);
console.log(`"abcdefghijkl": -4 ==> "${nthString('abcdefghijkl', -4)}" === "iea"`);