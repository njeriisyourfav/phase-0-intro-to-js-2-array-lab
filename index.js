let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.length = 0;
    cats.push("Milo", "Otis",  "Garfield");
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.shift();
    return cats;
}
function appendCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    let newCats = [...cats, "Broom"];
    return newCats;
}

console.log(appendCat());

function prependCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    let newCats = [ "Arnold",...cats];
    return newCats;
}

function removeFirstCat (){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    let newCats = cats.slice(1);
    return newCats;
}
function removeLastCat () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    let newCats = cats.slice(0,cats.length-1);
    return newCats;
}