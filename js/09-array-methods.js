console.clear();

//  Kaip manipuliuoti array? / Manipuliavimas informacija list'e



const marks = [];
console.log(marks);

// 1. ITRAUKTI:
// a) PUSH itraukia is galo
marks.push(10); 
marks.push(2);
marks.push(8);

console.log(marks); // spausdina [ 10, 2, 8 ]

// b) UNSHIFT itraukia is priekio
marks.unshift(9);
marks.unshift(8);
marks.unshift(7);

console.log(marks); // spausdina [ 7, 8, 9, 10, 2, 8 ]

// 2. PASALINTI:
// a)SHIFT pasalina irasus is kaires
marks.shift();
marks.shift();
marks.shift();

console.log(marks); // spausdina [ 10, 2, 8 ], nes pasalino pirmus tris skaicius

// b) POP pasalina irasus is desines
marks.pop();
console.log(marks); // spausdina [ 10, 2 ]

//kaip suzinoti paskutine pozicija?
const paskutinePozicija = marks.length -1;
console.log(marks[paskutinePozicija]);  // spausdina 2
//ARBA
console.log(marks.at(-1)); // trumpesnis variantas (ima -1 paskutini is galo, -2 pries paskutiti ir t.t.)

// ar array savyje turi kazkoki elementa? 
// tinka kai masyva sudaro skaiciai, stringai ar boolean. Kai masyva sudaro masyvai ar kiti objektai, include nusisnekes
console.log(marks.includes(2));  //spausdina true

console.log(marks.includes(11)); //spausdina false

console.log(marks.includes('labas')); //spausdina false

// kelinta pozicija?
console.log(marks); // spausdina [ 10, 2 ]
console.log(marks.indexOf(2)); //spausdina 1
//jei elemento nera, grazina -1

// sujungia i vientisa teksto gabala (string)
const visiPazymiai = marks.join();
console.log(visiPazymiai); // spausdina 10, 2

const visiPazymiai2 = marks.join(''); // panaikina skyrybos zenkla tarp skaiciu, spausdina 102
console.log(visiPazymiai2);

const visiPazymiai3 = marks.join(' -==- '); // iterpia -==- tarp skaiciu, spausdina 10 -==- 2
console.log(visiPazymiai3);

// Kaip sukeisti vietomis?

const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(skaiciai);

console.log(skaiciai.reverse()); //spausdina [  10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

// Kaip 'nupjauti' gabala? 

console.log(skaiciai);
console.log(skaiciai.slice(3)); // spausdina [7, 6, 5, 4, 3, 2, 1 ]
console.log(skaiciai.slice(-3)); // spausdina [ 3, 2, 1 ]
console.log(skaiciai.slice(2, 4)); //nuo-iki (kur pradeti - kur pabaigti?) spausdina [ 8, 7 ]

// kaip iterpti viduryje?

console.log(skaiciai); 
//                  (start, kiek istrinti, ka irasyti);
console.log(skaiciai.splice(2, 0, 'X')); 

console.log(skaiciai);

