//? Wap to find the factorial of a given number
// For example, the factorial of 5 is 120 (5 * 4 * 3 * 2 * 1)

let num = prompt('Enter a number:');
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
alert("The factorial of " + num + " is " + factorial);