//dynamic type-cast (Typisierung)
if (123 == "123") console.log("1: true");

//dynamic type-casts
let a1 = typeof ("42" * 1);
console.log("2: " + a1);

//comparison with type check
if (42 === "42") console.log("3: true");
else console.log("3: false");

//variables
var x1;
if (x1 == null) console.log("4: true, type is: " + x1);
console.log("5:");
let x2 = 1; {
    let x2 = 2;
    console.log(x2);
} console.log(x2);
var x3 = 1; {
    var x3 = 2;
    console.log(x3);//Outputs 2
} console.log(x3);//Outputs 2 aswell

//constants
const test = { a: 1 };
test.a = 2; //Works
//test = { a: 3 }; //Error

//number-check
console.log("6: " + isNaN("Hello"));

//Template Strings
const name = "Jim";
const message = `Hello ${name}. Have a random Number: ${Math.random()}`;
console.log("7: " + message);

//Arrays
var planets = ["Mars", "Jupiter", "Earth"];
console.log("8: " + planets[1]); // counting starts with 0 → Jupiter
typeof planets; // object, note same as [1, 2, 3]
//To check if a variable is an Array use
if (Array.isArray(planets)) console.log("is an array");

//Multidimensional Arrays
console.log("9:");
var a = [[1, 2, 3], [1, 2, 3], [2, 3, 4]];
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        console.log(a[i][j] + " ");
    }
}

//Regular expressions
var regexp = /\((\d*)\)/; // introduced by ‘/’
console.log("10: " + regexp);

//Tokens, white spaces
var x4 = 2 + 2
    - 4 + 2
console.log("11: " + x4); // 2 Same as var x=2+2-4+2; console.log(x);

//Control structures
switch (x4) {
    case 3: {
        y = 5; break;
    }
    case 4: {
        y = 3; break;
    }
    default: { y = 0 };
}
//Loops
console.log("12:");
for (let i = 0, j = 100; i < 100; i++ , j--) {
    console.log("i: " + i + " j: " + j);
}
let foobar = ['foo', "bar", 'something'];
for (let i in foobar) {
    console.log(foobar[i]);
}
outerloop: for (let i = 0; i < 100; i++) {
    innerloop: for (let j = 0; j < 100; j++) {
        console.log("i: " + i + " j: " + j);
        if (j > 10) break;
        if (j > 5) continue outerloop;
    }
}

//Exceptions
console.log("13:");
try {
    console.log("something");
} catch (e) {
    console.log("instead");
} finally { console.log("finally"); }
try {
    if (x4 > 0) {
        throw ("Amount is negative!");
    }
} catch (e) {
    console.log(e);
} finally {
    console.log(x4);
}

//Objects
console.log("14:");
let o1 = {
    "name": "Dieter",
    "properties": {
        "age": 25,
        "weight": "75kg"
    }
}
console.log(o1.properties.age);
console.log(o1["name"]);
let o2 = { 0: "zero", 1: "one", 2: "two" }
console.log(o2[1]); //no dots allowed

//functions
function plus(x, y) {
    return x + y;
}
console.log(plus(2, 2)); // 4
console.log(plus.name); // plus
console.log(typeof plus); // function
let o = {
    "avar": "String",
    "afunc": function plus(x, y) { return x + y; }
};
console.log(o.avar + " " + o.afunc(2, 2));
const f = function plus(x, y) { return x + y; };
console.log(f(2, 2));

