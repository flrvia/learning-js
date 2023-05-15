console.log("Type Conversion");

console.log(parseInt("2") + parseInt("2")); //4

// -> Ele está convertendo a String para Inteiro (Int)

console.log("10" / "2"); //5

// -> Ele entende como está divindo os números, então ele tentará converter para número.

console.log(parseInt("10") / parseInt("2")); //5

// -> Não precisa de parseInt

console.log("Flávia" / "2"); // Not a Number (NaN)