console.log("Type Conversion");

console.log(parseInt("2") + parseInt("2")); //4

// -> He is converting the String to Integer (Int)

console.log("10" / "2"); //5

// -> It understands it as dividing numbers, so it will try to convert to number.

console.log(parseInt("10") / parseInt("2")); //5

// -> No parseInt needed

console.log("Flávia" / "2"); // Not a Number (NaN)