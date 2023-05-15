console.log("Working with Variable Assignment");

// -> cont: constants = can't change!
// -> let : is a common variable = it can change!
// -> it's a good practice to leave our variables as constants

//const nome = "Flávia";
let nome = "Flávia"; 
// -> variable that can change
const lastname = "Santana";
const age = 21;

console.log(nome, lastname);
// -> showing with space the name and the last name

console.log(`My name is ${nome} ${lastname}`);

const completeName = nome + lastname;
// -> Isso é uma sobrescrita

console.log(completeName);