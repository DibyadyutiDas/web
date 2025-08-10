//? Wap to checks if a given number is a palindrome
// For example, 121 or 12321 are palindromes, while 123 is not

let num = prompt('Enter a number:');
let length = num.length;
let palindrome = true;
for (let i = 0, j = length - 1; i < j; ++i, --j) {
    if (num[i] !== num[j]) {
        palindrome = false;
        break;
    }
}
const message = palindrome ? "This given string is a palindrome number" : "This given string is not a palindrome number";
alert(message);
