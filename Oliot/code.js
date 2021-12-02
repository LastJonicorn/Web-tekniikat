/*
let fname = "Joni";

testi(fname);

function testi(n){
    n = "Liisa";
}


let person = {
    fname: "Joni",
    lname:"Lampela",
    age: 29
}

person.age = 25;
person.length = 175;

console.log(person);

let persons = [
    {
        fname= "Tiina",
        lname = "Karvonen",
        age = 34
    },
    {
        fname= "Lasse",
        lname= "Haverinen",
        age= 28
    },
    person
];

//console.log(persons[1].lname);

persons.forEach(p => console.log(p.fname));
*/

let person = {
    fname: "Joni",
    lname:"Lampela",
    age: 29
}

testi(person);

console.log(person.age);


function testi(p){
    p.age = 50;
}