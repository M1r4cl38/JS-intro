console.clear();
/*
STRING - tekstas

Iniciavimo budai:
- dviguba kabute
- vienguba kabute
- backtick `MULTILINE TEKSTUI
Jei norime kabutese irasyti kabutes, reikia rasyti (\') arba (\")
*/

const nickname = "Pavardenis";
const username = 'Vardenis'

console.log(nickname);
console.log(username);

const empty = "";
console.log(empty); //spausdinama tuscia eilute

const user1 = 'Petras';
const user2 = 'Maryte';
const user3 = 'Jonas';
const user4 = 'Ona';

// Sveiki, <vardas>!
const hi1 = 'Sveiki, ' + user1 + '!'; 
console.log(hi1);

const hi2 = 'Sveiki, ' + user2 + '!'; 
console.log(hi2);

const hi3 = 'Sveiki, ' + user3 + '!'; 
console.log(hi3);

const hi4 = 'Sveiki, ' + user4 + '!'; 
console.log(hi4);

const labas = 'Labas rytas\rtau.';    // \r reiskia "grizk i eilutes pradzia ir toliau rasyk nuo ten"
console.log(labas);
//tau.s rytas

const labas2 = 'Labas rytas\ntau.'; // \n reiskia new line
console.log(labas2);
//Labas rytas
//           tau.

const labas3 = 'Labas rytas\r\ntau.'; // \r\n reiskia TVARKINGA new line
console.log(labas3);
//Labas rytas
//tau.

const labas4 = `Labas rytas tau.
Labas dar karta`;               // Jei naudojam BACKTICK ``, tekstas VISADA BUS GRAZUS is nauju eiluciu
console.log(labas4);
//Labas rytas tau.
//Labas dar karta

////////////////////////// I M P O R T A N T //////////////////////////////
//BACKTICK panaudojimas:
const vardas = 'Vardenis';
const pavarde = 'Pavardenis';

//Hi, I am Vardenis Pavardenis and I like you!
const personHi2 = `Hi, I am ${vardas} ${pavarde} and I like you!`;
console.log(personHi2);