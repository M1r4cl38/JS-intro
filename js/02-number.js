console.clear();

/*
NUMBER

GALIMI MATEMATINIAI VEIKSMAI:
aritmetiniai operatoriai: 
     +, -, /, *, **(kelimas laipsniu), % (liekana)

priskyrimo operatoriai:
    =  arba 
    += (jis pats plius kazkas naujo)
    -= (is manes atimk kazka naujo)
    /= (mane padalink is kazko naujo)
    *= (mane padaugink is kazko naujo)
    **= (pakelk mane is kazkokio naujo laipsnio)
    %=

KINTAMUJU INICIAVIMO BUDAI:
- const (default)
- let (jei kinta reiksme)
- var (naudoti tik kai zinai ka darai)
*/


//NORMAL:  
//sveikasis
console.log(12551);
console.log(-12551);
console.log(0);
console.log(-0);

//desimtainis
console.log(3.1415);
console.log(-3.1415);
console.log(3 / 4);
console.log(1 / 3);
console.log(0.1 + 0.2);
console.log(2 + 2 * 2);

//MYSTIC:
//begalybes
console.log(Infinity);
console.log(-Infinity);

//NaN (not-a-number)
console.log(NaN);

//VEIKSMAI:
console.log(7 + 5);
console.log(7 - 5);
console.log(7 / 5);
console.log(7 * 5);

//kelimas laipsniu:
console.log(2 ** 2, '=', 2 * 2);

//iniciavimo budai:
const a = 7;
console.log(a);

let PI = 3.14;
console.log(PI);

PI = 3;
console.log(PI);

//pazymiai: 10, 2, 8, 4, 6
//skaiciavimo pvz: 1:
let suma = 0;
console.log(suma);

suma = suma + 10;
console.log(suma);

suma = suma + 2;
console.log(suma);

suma = suma + 8;
console.log(suma);

suma = suma + 4;
console.log(suma);

suma = suma + 6;
console.log(suma);

//skaiciavimo pvz:2
let suma2 = 0;
console.log(suma2);

// pirmas budas suma2 = suma2 + 10;
//antras budas (prie manes paties pridek 10):
suma2 += 10;
console.log (suma2);

suma2 += 2;
console.log (suma2);

suma2 += 8;
console.log (suma2);

suma2 += 4;
console.log (suma2);

suma2 += 6;
console.log (suma2);

//kitas pvz:
let suma3 = 0;
console.log(suma3);

suma3 += 10;
console.log(suma3);

suma3 *= 5;
console.log(suma3);

suma3 -= 1;
console.log(suma3);

suma3 /= 7;
console.log(suma3);

suma3 **= 3;
console.log(suma3);

//liekanos skaiciavimas

const skaicius = 81;
const daliklis = 10;
const dalmuo = skaicius / daliklis;
console.log(skaicius, '/', daliklis, '=', dalmuo);

const liekana = skaicius % daliklis;
console.log(liekana);

console.log(17 / 3); //parodo rezultata
console.log(17 % 3); //parodo tik liekana