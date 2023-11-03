

//---------------------- Simple Counting Print ----------------------
for (let i = 0; i <= 10; i++) {
    console.log(i);
}


//---------------------- Print Sum of n numbers ----------------------
let n = 5;
let sum = 0;

for (let i = 0; i <=n; i++) {
    sum = sum + i;
}

console.log("Sum = " +sum);

//---------------------- Sum of Factorial n! ----------------------
let fact = 1;
let s = 0;
let num = 5;

// for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//     s = s + fact;
// }

// console.log(s);

//---------------------- Print Factorial of n! ----------------------
for (let i = 1; i <= num; i++) {
    fact = fact * i;
}

console.log("Factorial = " +fact);
