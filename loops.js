console.log(`\n Working with Condicionals`);

const listOfDestination = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const ageOfBuyer = 15;
const authorization = true;
let hasTicket = false;
const destination = "Salvador";

console.log("\n Possible destinations:");
console.log(listOfDestination); // [ 'Salvador', 'São Paulo', 'Rio de Janeiro' ]

const canBuy = ageOfBuyer >= 18 || authorization;


let cont = 0;
let destinyExists = false;
while(cont < 3){
    if(listOfDestination[cont] == destination){
        destinyExists = true;
        break;
     }
    //else{
    //     console.log("Destiny doesn't exists")
    // }
    cont++;
}

// if (ageOfBuyer >= 18 || authorization) {
//   console.log("You have bought this ticket successfully, have a good trip!");
//   listOfDestination.splice(2, 1); //[ 'Salvador', 'São Paulo' ]
//   hasTicket = true;
// } else {
//   console.log("You are not of legal age! You can't buy this!");
//   hasTicket = false;
// }


console.log("\n Destiny exists: ", destinyExists);

if(canBuy && destinyExists){
    console.log("Have a good trip!");
}else{
    console.log("we have a error, sorry!");
}

for(let i = 0 ; i < 3; i++){
    if(listOfDestination[i] == destination){
        destinyExists = true;
     }
}