console.clear();

/*
FOR - loop/ciklas. Visu ciklu tevas
kartojame operacijas tol kol reikia, arba numatyta kieki kartu

    (kiek kartu kartoti) {ka kartoti}
for () {}
*/

const marks = [10, 2, 8, 4, 6];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

let sum = 0;
let i = -1;
//++ vienu vienetu didina, --vienu vienetu mazina
sum += marks[++i]; // i reiskia index i/let/var sinonimai
sum += marks[++i];
sum += marks[++i];
sum += marks[++i];
sum += marks[++i];
console.log('>>>', sum);

//////// ++n pirma padidina, tada isspausdina, n++ pirma isspausdina pries tai buvusia reiksme, tada padidina
let n = 0;

console.log(n); // spausdina 0
console.log(n++); // spausdina 0
console.log(++n); // spausdina 2
console.log(n++); // spausdina 2
console.log(++n); // spausdina 4

console.clear();///////////////

const pazymiai = [10, 2, 8, 4, 6];

/*
(1. kas kinta?/kazkas, kas keisis; 
2. kiek kartu kartoti?/eiti tol, kol tenkina salyga; Siuo atveju 5 yra riba
3. i turi augti iki kol tenkina salyga?)
*/
for (let i=0; i < 5; i++){
    console.log(i);  // spausdina 0 1 2 3 4 STULPELIU. Cia issispausdino const pazymiai POZICIJU REIKSMES
}

for (let i=2; i <= 7; i++){ // pradeti nuo 2, riba 7, bet imtinai, nes <=
    console.log(i);  // spausdina  2 3 4 5 6 7 STULPELIU
}

// kaip istraukti konkretu pazymi?

for (let i=0; i < pazymiai.length; i++){  // pazymiai.length paims visas reiksmes
    console.log(i, '-', pazymiai[i]); 
}
/*
spausdina:
0 - 10   pirmas skaicius - pozicija, antras - pazymys
1 - 2
2 - 8
3 - 4
4 - 6
*/
console.clear();

//    i=kas kelintas -1            i += kas kelintas
for (let i=1; i < pazymiai.length; i += 2){  // i=1 pradeda nuo antro IR i += 2 spausdina kas antra pozicija ir joje esanti skaiciu
    console.log(i, '-', pazymiai[i]); 
}
/* spausdina:
1 - 2
3 - 4
*/
// tas pats tik automatiskai istatant 'kas kelintas':
const kasKelintas = 2
for (let i = kasKelintas -1; i < pazymiai.length; i += kasKelintas){  
    console.log(i, '-', pazymiai[i]); 
}
/* spausdina:
1 - 2
3 - 4
*/

console.clear();
/// tas pats tik nekeiciant naujos eilutes ir naudojant if:
 
for (let i=0; i < pazymiai.length; i++){     // "jei i dalinasi is 2 be liekanos" arba "2 kartotinis" arba "kas antras skaicius"
    if (i % kasKelintas === kasKelintas - 1) {     // kad pradetu skaiciuoti kas kelinta taip kaip reikia, rasom === kasKelintas -1     
    console.log(i, '-', pazymiai[i]); 
    }
}

console.clear();

for (let i = 0; i < 5; i++) {
    console.log(i); 
}
/* spausdina:
0
1
2
3
4 */

// -5..6 ?
//     i = nuo kur?; i < iki kur?; i++ zingsnio dydis. siuo atveju +1
for (let i = -5; i < 7; i++) {
    console.log(i);  // spausdina stulpeliu nuo -5 iki 6
}

// suapvalinti skaicius, kai zingsnis +=0.1:
for (let i = 0; i < 2; i += 0.1) {
    console.log(i.toFixed(), i);  // salia skaiciu po kablelio spausdina suapvalintus iki vienetu skaicius. 
    // jei norime, kad apvalintu skaicius po kablelio, toFixed(rasome kiek skaiciu po kablelio apvalinti)
    // apvalinant skaiciu pateikia string, todel su juo negalima atlikti matematiniu veiksmu
}
// kaip string convert i number?
console.log('5', parseInt('5')); // parseFloat('5.14') grazintu skaiciu kartu su po kablelio
// patikrinti:
console.log(typeof '5', typeof parseInt('5')); // spausdina: string number

// kaip prie suapvalinto prideti skaiciu?
for (let i = 0; i < 2; i += 0.1) {
  let suapvalintas = parseFloat(i.toFixed(3)); 
    suapvalintas += 1;
    console.log(suapvalintas, '-', i);
}

console.clear();

// isspausdinti teksta pasimboliui:
const text = 'Labas';

for (let i = 0; i < text.length; i++) {
    console.log(i, '-', text[i]);
}
/* spausdina:
0 - L
1 - a
2 - b
3 - a
4 - s
*/


// spausdinti raides atbulai:

for (let i = text.length -1; i >= 0; --i ) {
    console.log(i, '-', text[i] );
}

// spausdinti atbulai, nekeiciant pirmos for eilutes:

for (let i = 0; i < text.length; i++) {
    console.log(i, '-', text[text.length - i - 1]);
}

// trecias budas spausdinti atbulai:

for (let i = 0; i < text.length; i++) {
    const index = text.length - i - 1;
    console.log(i, '-', text[index]);
}