console.log(`Working with Condicionals`);

const listOfDestination = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const ageOfBuyer = 15;
const authorization = true;
const hasTicket = true;

console.log("Possible destinations:");
console.log(listOfDestination); // [ 'Salvador', 'São Paulo', 'Rio de Janeiro' ]

if (ageOfBuyer >= 18 || authorization) {
  console.log("You have bought this ticket successfully, have a good trip!");
  listOfDestination.splice(2, 1); //[ 'Salvador', 'São Paulo' ]

  // } else if (autorization) {
  //   console.log("You are not of legal age! But you are authorized to buy!");
  //   listOfDestination.splice(2, 1); //[ 'Salvador', 'São Paulo' ]
  // }
} else {
  console.log("You are not of legal age! You can't buy this!");
}

console.log("Boarding: \n\n");
if (ageOfBuyer >= 18 && hasTicket) {
  console.log("Have a good trip!");
} else {
  console.log("You cannot board.");
}

console.log(listOfDestination);

// -> ALT + SHIFT + F = formatting code
