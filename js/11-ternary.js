console.clear();

/*
TERNARY

klausimas ? teigiama reiksme : neigiama reiksme;
*/

// trumpesnis variantas su TERNARY:
const leidimas = 100 >= 18 ? 'pilnametis' : 'nepilnametis';
console.log(leidimas);

// ARBA ilgesnis variantas:
let approve = '';

if (100 >= 18) {
    approve = 'pilnametis';
} else {
    approve = 'nepilnametis';
}
console.log(approve);

////////////////
const a = 1
    ? 2
    : 3;
console.log(a);

const b = 1
    ? 2
    : 3
        ? 4
        : 5;
console.log(b);

const c = 1 < 2
    ? 3
        ? 4
        : 5
    : 6;
console.log(c);

const d = 1 > 2
    ? 3
    : 4
        ? 5
        : 6;
console.log(d);

const e = 1 < 2
    ? 3
        ? 4
        : 5
    : 6
        ? 7
        : 8;
console.log(e);



// true -> [1], false -> [2]

const masyvas = [];

// turint klausima: ar viena reiksme, ar kita reiksme? galima rasyti:
if (true) {
    masyvas.push(1);
} else {
    masyvas.push(2);
}
//// arba trumpiau:
const mas = true ? [1] : [2];