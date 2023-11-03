// Write a JavaScript Program to find whether a number is Divisible by either 2 or 3.


let number = 30; //result will be "Divisible by 2 and 3 both."
// let number = 10; //result will be "Number is Divisible by 2 Only."
// let number = 15; //result will be "Number is Divisible by 3 Only."
// let number = 11; //result will be "Not Divisible by these numbers."



    if (number%2 == 0 && number%3 == 0) {
        console.log("Divisible by 2 and 3 both.");
    }
    else if (number%2 == 0) {
        console.log("Number is Divisible by 2 Only.");
    }
    else if (number%3 == 0) {
        console.log("Number is Divisible by 3 Only.");
    }
    else {
        console.log("Not Divisible by these numbers.");
    }