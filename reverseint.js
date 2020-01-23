function reverseInt(num){
    //Solution 1
    // const reversed =  num.toString().split('').reverse().join('');

    // if(num<0){
    //     return parseInt(reversed) * -1;
    // }
    // return parseInt(reversed);

    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}

console.log(reverseInt(-123));