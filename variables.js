"use strict";
let name2; // no type mentioned,so when we assign value interpreter will auto detect the type of variable.
let age = 20; // number type
let age1 = 10;
let name1 = "ali";
let ismale = true;
// this way of printing in known as string literals.
console.log(`values in the given variables are \n ${age1}\n${name1}\n${ismale}\n${typeof (age)}\n${name2}\n`);
// Union type variable
let colour;
colour = "green";
colour = 9;
colour = true;
console.log(`${colour}\n ${colour} \n ${colour} `);
