console.clear();

/*
ARRAY - arejus, sarasas, listas, matrica, masyvas
*/

//kintamuosius vadinti daugiskaita
const empty = [];
console.log(empty);

                //0   1  2  3  4 - kelintas skaicius. Pradedama skaiciuoti nuo 0
const pazymiai = [10, 2, 8, 4, 6]; //kurti tik su to paties tipo informacija
console.log(pazymiai);

//                 0          1        2       3
const vardai = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(vardai);

//is masyvo galima istraukti tik viena reiksme, kuri mus domina (vienoje eiluteje)
console.log(vardai[0]);
console.log(vardai[1]);
console.log(vardai[2]);
console.log(vardai[3]);

console.clear();

const marks1 = [10, 9, 8];
const marks2 = [6, 7, 8];
const marks3 = [5, 5, 5];

function average(marks) {
    let sum = 0;
    sum += marks[0];
    sum += marks[1];
    sum += marks[2];
    return sum / marks.length;   //marks.length - masyvo nariu skaicius. tas pats kaip     return sum /3;
}

console.log('Vidurkis 1:', marks1, '=', average(marks1));
console.log('Vidurkis 2:', marks2, '=', average(marks2));
console.log('Vidurkis 3:', marks3, '=', average(marks3));


const text = 'Labas rytas';
console.log(text);
console.log(text[1]);
console.log(text[2]);
console.log(text[3]);
console.log(text[4]);
console.log(text[5]);

console.log(text.length);  //simboliu kiekis

