var kittens;

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  return(kittens.concat(name));
}

function prependKitten(name){
  return([name].concat(kittens));
}

var kittens = ['Milo', 'Otis', 'Garfield'];

destructivelyAppendKitten('Ralph');

var kittens = ['Milo', 'Otis', 'Garfield'];

destructivelyPrependKitten('Ralph');

var kittens = ['Milo', 'Otis', 'Garfield'];

destructivelyRemoveLastKitten();

var kittens = ['Milo', 'Otis', 'Garfield'];

destructivelyRemoveFirstKitten();

var kittens = ['Milo', 'Otis', 'Garfield'];

appendKitten('Broom');

prependKitten('Arnold');
