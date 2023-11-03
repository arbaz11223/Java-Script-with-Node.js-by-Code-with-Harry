
// Q1. Create a Variable of type string and try to add a number to it
let a = "ARBAZ";
let b = 6;

console.log(a + b);


//------------------------------------------------------------------------

// Q2. Use typeof() function to find find the datatype of the string in last question.
console.log(typeof(a));


//------------------------------------------------------------------------

// Q3. Create a const object in javascript can you change it to hold a number later ?
const c = {
    Arbaz: "true",
    Aman : "flase",
    Ayan : 67,
    Arav : "now"
};
// c = 67;     //But it cannot change value of c because constant never been change at runtime.

console.log(c);   


//------------------------------------------------------------------------

// Q4. Try to add a new key to the const object in Question 3 were you able to do it ?

c['Nobita'] = "Doraemon";  //{ Arbaz: 'true', Aman: 'flase', Ayan: 67, Arav: 'now', Nobita: 'Doraemon' }

console.log(c);


//------------------------------------------------------------------------

// Q5. Write a JS Program to create a word-meaning dictonary of 5 words.

const wordMeaning = {
    Home: "Residence",
    Jump: "Leap",
    Hunger: "Appetite",
    Happy: "Joyful",
    Run: "Spring"
}

console.log(wordMeaning.Hunger); //Print   Syntax 1
console.log(wordMeaning['Hunger']); //Print  Syntax 2