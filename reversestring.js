function reverse(str){
    //Solution 1
    //const arr = str.split('');
    //arr.reverse();
    //return arr.join('');

    //Solution 1 shorthand
    //return str.split('').reverse().join('');

    //Solution 2
    // let reversed = '';
    // for(let character of str){
    //     reversed = character + reversed;
    // }
    // return reversed;

    //Solution 3
    //return str.split('').reduce((reversed, character) => {
    //    return character + reversed;
    //}, '');

    // return str.split('').reduce(function(rev, char){
    //     return char+rev;
    // }, '');
    return str.split('').reduce((rev, char) => char+rev, '');
}

console.log(reverse("Hello"));