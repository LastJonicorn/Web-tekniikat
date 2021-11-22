let array = ["one", "two", "three", "four", "five"];

function printArray(item){
    console.log(item);
}
array.forEach(printArray);


let prizes = [5, 10, 15, 20, 25];

let multiplied = prizes.map(item => item * 0.8);
console.log(multiplied);


let names = ["John", "Saku", "John", "Pekka", "Taavi"];

let newNames = names.map(item =>{
    if(item == "John")
    return "Matti";
    else
    return item;
});
console.log(newNames);


let numbers = [-1, 3, -6, 10, 13];

let positive = numbers.filter(item => item >= 0);
console.log(positive);


let longNames = ["Kaarina", "Eeva-Leena", "Timo-Petteri", "Simo"];

let printName = longNames.filter(item => item.length > 8 && item[0] == "T")
console.log(printName);


let nameArray = ["Taavi", "Pekka", "Paula", "Liisa"];

