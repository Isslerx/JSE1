//AND &&
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(false && false); // -> false


//OR ||
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false

//NOT !
console.log(!true); // -> false
console.log(!false); // -> true


const a = false;
const b = true;
const c = false;
const d = true;
console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false



let nr = 0;
let year = 1970;
let name = "Alice";
let empty = "";
console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!name); // -> false
console.log(!empty); // -> true
console.log(!!nr); // -> false
console.log(!!name); // -> true


console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string
console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob



let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0