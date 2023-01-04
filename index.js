// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat() {
    const Cats = [...cats, "Broom"];
    return Cats;
}
function prependCat() {
    const Cats = ["Arnold", ...cats]
    return Cats;
}
function removeLastCat() {
    const Cats = cats.slice(0, 2);
    return Cats;
}
function removeFirstCat() {
    const Cats = cats.slice (1);
    return Cats;
}
