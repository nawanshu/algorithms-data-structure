function anagram(stringA, stringB) {
    //Solution 1
    // const aCharMap = buildCharMap(stringA);
    // const bCharMap = buildCharMap(stringB);
    // if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    //     return false;
    // }
    // for(let char in aCharMap){
    //     if(aCharMap[char] !== bCharMap[char]) {
    //         return false;
    //     }
    // }
    // return true;
    return cleanString(stringA) === cleanString(stringB);
}
// Part of Solution 1
// function buildCharMap(str) {
//     const charMap = {};
//     for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagram("rail safety", "fairy tales"));