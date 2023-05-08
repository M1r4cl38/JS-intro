console.clear();

function sum(a, b) {
    console.log('print', a, b);
    return a + b; //irasyti ka nori, kad grazintu
}

const s1 = sum(2, 1); // a spausdina 2, b spausdina 1
console.log(s1);

const s2 = sum(5, 7); // a spausdina 5, b spausdina 7
console.log(s2);

function hi(name) {
    console.log(name);                    //kai tu man davei
    return `Hi, my name is ${name}!`;     //as grazinau
}

//Hi, my name is Petras!
console.log(hi('Petras'));

//Hi, my name is Maryte!
console.log(hi('Maryte'));

///////////////////////////////////////

function prisistatymas(name, age) {
    return `Sveiki, as ${name} ir man ${age} metu.`;
}

//Sveiki, as Petras ir man 16 metu.
console.log(prisistatymas('Petras', 16));

//Sveiki, as Maryte ir man 100 metu.
console.log(prisistatymas('Maryte', 100));