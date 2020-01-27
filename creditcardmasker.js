//Solution1
// function processInput(creditCardNumber){
//     let result = '';
//     const len = creditCardNumber.length;
//     if(len > 5){
//         const first = creditCardNumber.slice(0,1);
//         const lastFour = creditCardNumber.slice(len-4, len);
//         for(let i=1; i<len-4; i++){
//             const char = creditCardNumber[i];
//             result += isNaN(parseInt(char, 10)) ? char : '#';
//         }
//         result = `${first}${result}${lastFour}`;
//     } else {
//         result = creditCardNumber;
//     }
//     return result;
// }

//Solution2
function processInput(creditCardNumber){
    let result = '';
    const len = creditCardNumber.length;
    if(len > 5){
        const regex = /(?!^)\d(?=.{4,}$)/g;
        result = creditCardNumber.replace(regex, "#");
    } else {
        result = creditCardNumber;
    }
    return result;
}

//(^.{1})(.{1,})(.{4})$

//regex = /(^.{1})(.{1,})(.{4})$/g

//regex3 = /\d/g

// regex7 = /(?!^)(\D*)(?=.{4,}$)/g

// "1234fgr45th6y7uty5678888".replace(regex7, "#")

function maskify(creditCardNumber){
    let result;
    switch(typeof creditCardNumber){
        case 'string':
            result = processInput(creditCardNumber);
            break;
        case 'number':
            result = processInput(String(creditCardNumber));
            break;
        default:
            result = '';
            break;
    }
    return result;
}

console.log(maskify("12d3ff4hhjg56789"));