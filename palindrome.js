function palindrome(str) {
    //Solution 1
    //return (str === str.split('').reverse().join(''));

    //Solution 2
    return str.split('').every((char, index) => {
        return char === str[str.length - index - 1];
    });
}

console.log(palindrome("saras"));