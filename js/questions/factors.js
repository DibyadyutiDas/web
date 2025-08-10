//? Wap to find all factors of a given number
// For example, the factors of 12 are 1, 2, 3, 4, 6, 12

let num = prompt('Enter a number:');
let factors = [];
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        factors.push(i);
    }
}
alert("The factors of " + num + " are: " + factors.join(", "));