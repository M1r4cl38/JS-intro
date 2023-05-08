console.clear();

/*
OBJECT - objektas. Visu duomenu tipu tevas
{
    key1: value1;
    key2: value2;
    key3: value3;
}

array - supaprastintas objektas
string - supaprastintas array
*/

//Sveiki, mano vardas VARDAS ir man KAZKIEK metu.

const jonas = {
    name: 'Jonas', //raktazodis: reiksme
    age: 77,
    isMarried: false, //isMarried = is_married
}

console.log(jonas);


const ona = {
    name: 'Ona',
    isMarried: true,
    age: 66,
    movies: [
        {
            title: 'hello',
            year: 1990,
        },
        {
            title: 'bye',
            year: 1970,
        }
    ]
}

console.log(ona);
//tik Onos amzius:
console.log(ona['age']);
//ARBA
console.log(ona.age);

console.log(ona.movies.length); //spausdina movies kieki
//                   objektas=0, pries pasirenkant nurodyti kuris objektas
console.log(ona.movies[0]); //spausdina tik informacija apie pirma filma 
console.log(ona.movies[0].title); //spausdina tik pirmo filmo pavadinima
