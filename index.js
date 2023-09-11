// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  console.log("Destructively Appended:", cats);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  console.log("Destructively Prepended:", cats);
}

function destructivelyRemoveLastCat() {
  cats.pop();
  console.log("Destructively Removed Last Cat:", cats);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  console.log("Destructively Removed First Cat:", cats);
}

function appendCat(name) {
  const newCats = [...cats, name];
  console.log("Appended Cat:", newCats);
  return newCats;
}

function prependCat(name) {
  const newCats = [name, ...cats];
  console.log("Prepended Cat:", newCats);
  return newCats;
}

function removeFirstCat() {
  const newCats = cats.slice(1);
  console.log("Removed First Cat:", newCats);
  return newCats;
}

function removeLastCat() {
  const newCats = cats.slice(0, cats.length - 1);
  console.log("Removed Last Cat:", newCats);
  return newCats;
}

// Example usages:
destructivelyAppendCat("Simba");
destructivelyPrependCat("Whiskers");
destructivelyRemoveLastCat();
destructivelyRemoveFirstCat();
appendCat("Nala");
prependCat("Luna");
removeFirstCat();
removeLastCat();
