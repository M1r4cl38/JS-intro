console.clear();

/*
IF - palyginimas
Palyginimo operatoriai:
visi: >, <, >=, <=, ==, ===, 
naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, !=

Kodo sablonai:
if (uzduodamas klausimas) {rasoma ka daryti}
if () {} else {}
if () {} else {} if () {}
if () {} else {} if () {}... else if () {}
if () {} else {} if () {}... else if () {} else {}
*/

if (4 > 2) {
    console.log('taip'); // jei salyga tenkinama
}

if (7 < 10) {
    console.log('7 < 10'); // jei salyga tenkinama spausdins 7 < 10
} else {
    console.log('7 ne < uz 10');  // jei salyga netenkinama spausdins 7 ne < uz 10
} 

const userAge = 10;
const ageLimit = 18;

if (userAge >= ageLimit) {
    console.log('uzeik... 😎');
} else {
    console.log(`dar palauk ${ageLimit - userAge} metu...`);
}

/* 
= priskyrimas
== ar yra lygu?
=== ar pries tai yra lygu?
*/

/////////////////////////// STRUKTURA 1
const diena = 8;

console.log('START');

if (diena === 1) {
    console.log('pirmadienis');
} else if (diena === 2) { 
    console.log('antradienis');//jei diena yra 2, tada antradienis
} else if (diena === 3) {      // jei ne,
    console.log('treciadienis');  // tada treciadienis
} else if (diena === 4) {      // jei ne,
    console.log('ketvirtadienis'); // tada ketvistadienis
} else if (diena === 5) {
    console.log('penktadienis');
} else if (diena === 6) {
    console.log('sestadienis');
} else if (diena === 7) {
    console.log('sekmadienis');
} else {
    console.log('tokios dienos savaiteje nera');
}

console.log('END'); // skipina ir vaziuoja toliau

// Kodo nestinimas, pvz if viduje if

const arSvieciaSaule = false;
const arLyja = false;

let kaDaryti = 'nezinau';

if (arSvieciaSaule) {
    kaDaryti = 'eisim i kiema'; // sitos reiksmes nepamatysim,
    if (arLyja) {              // nes sitas overwrite
        kaDaryti = 'ziurim i vaivorykste';
    } else {
        kaDaryti = 'deginames pleziuke';
    }
} else {
    kaDaryti = 'kodinsim... ';
    if (arLyja) {
        kaDaryti = 'koks skirtumas... vis vien busiu namie';
    } else {
        kaDaryti = 'stebim zvaigzdes';
    }
}

console.log(kaDaryti);
////////////////////////////////////////// STRUKTURA 2

console.log('START');

const day = 4;

if (day === 1) {
    console.log('pirm');                  // gal pasiseks?
} else {
    if (day === 2) {
        console.log('ant');               // gal pasiseks?
    } else {
        if (day === 3) {
            console.log('trec');           // gal pasiseks?
        } else {
            if (day === 4) {
                console.log('ketv');        // gal pasiseks?
            } else {
                if (day === 5) {
                    console.log('penkt');    // gal pasiseks?
                } else {
                    if (day === 6) {
                        console.log('sest');    // gal pasiseks?
                    } else {
                        if (day === 7) {
                            console.log('sekm'); // ir jei niekada nepasiseke
                        } else {
                            console.log('nieko nesakau :P');   //nu, gerai.. rasom sita
                        }
                    }
                }
            }
        }
    }
}

console.log('END');
/////////////////////////////// STRUKTURA 3

const dd = 1;
let kokiaDiena = 'tokia diena neegzistuoja';   /// viskas yra blogai,

if (dd === 1) {                 // bet jei pasiseke, tada...
    kokiaDiena = 'pirmadienis';     //sekmes variantas 1
}

if (dd === 2) {
    kokiaDiena = 'antradienis';    //sekmes variantas 2
}

if (dd === 3) {
    kokiaDiena = 'treciadienis';   //sekmes variantas 3
}

console.log(kokiaDiena);

////////////////////////////////////////
const siandien = 5.6;

const dienuPavadinimai = [
    'pirmadienis',
    'antradienis',
    'treciadienis',
    'ketvirtadienis',
    'penktadienis',
    'sestadienis',
    'sekmadienis',
];

const savaitesDiena = dienuPavadinimai[siandien -1];
if (savaitesDiena === undefined) {
    console.log('>>>>', 'tokios dienos nera');
} else {
    console.log('>>>>', savaitesDiena);
}

///// A R B A ////////
const siandienYra = 5.6;

function kokiaSavaitesDiena(dienosNr) {

const dienuPavadinimai = [
    'pirmadienis',
    'antradienis',
    'treciadienis',
    'ketvirtadienis',
    'penktadienis',
    'sestadienis',
    'sekmadienis',
];

const savaitesDiena = dienuPavadinimai[dienosNr -1];
if (savaitesDiena === undefined) {
    return 'tokios dienos nera';
} else {
    return savaitesDiena;
}
}
console.log(kokiaSavaitesDiena(siandienYra));
console.log(kokiaSavaitesDiena(1));