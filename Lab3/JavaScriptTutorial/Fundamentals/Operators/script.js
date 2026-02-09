//ASSIGNMENT
let a = 2;

let x = 1 + (a *= 2);
// a = 4
// x = 5

//FIX
let aa = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 12

//POST FIX

let A = 1, B = 1;

let c = ++A; // ? 2, a = 2
let d = B++; // ? 1
