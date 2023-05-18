console.log(`Working with Lists`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// -> Instead of creating a variable by variable, we create an array.

// -> to comment out code, use the command = "ctrl + k + C"
// -> to uncomment a code, use the command = "ctrl + k + u"

const listOfDestination = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
// -> Construction of a list

listOfDestination.push(`Curitiba`); //[ 'Salvador', 'São Paulo', 'Rio de Janeiro', 'Curitiba' ]
// -> Adding an item to the list, after it been declared.

console.log("Possible destinations:");
console.log(listOfDestination); // [ 'Salvador', 'São Paulo', 'Rio de Janeiro' ]

listOfDestination.splice(2,1); //[ 'Salvador', 'São Paulo', 'Curitiba' ]
// the first is the postion you want to remove, and the second is how many elements you want to remove
console.log(listOfDestination);
// -> to remove an item from the list

console.log(listOfDestination[1]); //São Paulo

