// (&)      : bitwise AND (bot are true)
// (|)      : bitwise OR (any one truue)
// (^)      : bitwise XOR (if bits are different will be true)
// (~)      : bitwise NOT ()
// (<<)     : bitwise left shift (shifting bit towards left)
// (>>)     : bitwise right shift (shifting bit towards right)
// (>>>)    : bitwise right shift with zero


let a = 5; //5 = 0101
let b = 1; //1 = 0001

console.log(a&b);  // result will be 0001 which is 1.

console.log(a|b); // result will be 0101 which is 5.

console.log(a^b); // result will be 0001 which is 4.

console.log(~a); // result will be -6.

console.log(a<<1); //result will be 10.

console.log(a>>1); //result will be 2.

console.log(a>>>1); //result will be 




//------------------- Bitwise NOT Operator -------------------//
let c = 12;

// 12 = 1100
// ~12 = 0011
    // 2's Complement 
        // 0011 ----> 1100
        // 1100 + 1 ----> 1101 = -13

console.log(~c);