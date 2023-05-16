console.clear();

// FOR

const marksFor = [10, 2, 8, 4, 6];
let marksForSum = 0;

for (let i = 0; i < marksFor.length; i++) {
    const mark = marksFor[i];
    marksForSum += mark;
}

console.log(`For vidurkis: ${marksForSum / marksFor.length}`);

// FOR-OF

const marksForOf = [10, 2, 8, 4, 6];
let marksForOfSum = 0;

for (const mark of marksForOf) {
    marksForOfSum += mark;
}

console.log(`For-of vidurkis: ${marksForOfSum / marksForOf.length}`);


// FOR-2: iskelti parametrai

const marksFor2 = [10, 2, 8, 4, 6];
let marksFor2Sum = 0;
let i2 = 0;

for (; i2 < marksFor2.length; i2++) {
    const mark = marksFor2[i2];
    marksFor2Sum += mark;
}

console.log(`For-2 vidurkis: ${marksFor2Sum / marksFor2.length}`);

// FOR-3: daug inicijuojamu parametru

const marksFor3 = [10, 2, 8, 4, 6];
let marksFor3Sum = 0;

for (let i = 0, j = marksFor3.length; i < marksFor3.length && j >= 3; i++, j--) {
    const mark = marksFor3[i];
    marksFor3Sum += mark;
}

console.log(`For-3 vidurkis: ${marksFor3Sum / marksFor3.length}`);

// FOR-4: klausimo iskelimas

const marksFor4 = [10, 2, 8, 4, 6];
let marksFor4Sum = 0;

const marksFor4If = index => index < marksFor4.length;

for (let i = 0; marksFor4If(i); i++) {
    const mark = marksFor4[i];
    marksFor4Sum += mark;
}

console.log(`For-4 vidurkis: ${marksFor4Sum / marksFor4.length}`);

// FOR-5: kintamuju atnaujinimo iskelimas

const marksFor5 = [10, 2, 8, 4, 6];
let marksFor5Sum = 0;

for (let i = 0; i < marksFor5.length;) {
    const mark = marksFor5[i];
    marksFor5Sum += mark;
    i++;
}

console.log(`For-6 vidurkis: ${marksFor5Sum / marksFor5.length}`);

// FOR-7: visi pakeitimai vienoje vietoje

const marksFor6 = [10, 2, 8, 4, 6];
let marksFor6Sum = 0;
let i3 = 0;

for (; i3 < marksFor6.length;) {
    const mark = marksFor6[i3];
    marksFor6Sum += mark;
    i3++;
}

console.log(`For-7 vidurkis: ${marksFor6Sum / marksFor6.length}`);

// WHILE

const marksWhile = [];
let marksWhileSum = 0;
let i4 = 0;

while (i4 < marksWhile.length) {
    const mark = marksWhile[i4];
    marksWhileSum += mark;
    i4++;
}

console.log(`While vidurkis: ${marksWhileSum / marksWhile.length}`);

// DO-WHILE

const marksDoWhile = [];
let marksDoWhileSum = 0;
let i5 = 0;

do {
    const mark = marksDoWhile[i5];
    marksDoWhileSum += mark;
    i5++;
} while (i5 < marksDoWhile.length)

console.log(`Do-While vidurkis: ${marksDoWhileSum / marksDoWhile.length}`);

// FOR-IN

const user = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    key: 'didelis',
};

const userKeys = Object.keys(user);
for (const key of userKeys) {
    console.log(key, '=', user[key]);
}

for (const key in user) {
    console.log(key, '=', user[key]);
}


// O toliau: cikliski metodai :)

// FOREACH
// MAP
// SORT
// FILTER
// REDUCE