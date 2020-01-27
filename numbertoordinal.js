//Solution 1
function numberToOrdinal(num){
    if(isNaN(num)){
        console.log("Please enter a valid numeric value");
        return;
    }
    const SUFFIX = ["th","st","nd","rd"];
    const hundreds = num%100;
   return num + (SUFFIX[(hundreds-20)%10] || SUFFIX[hundreds] || SUFFIX[0]);
}

//Solution 2
// function numberToOrdinal(num){
//     let result = String(num);
//   const tens = num % 10;
//   const hundreds = num % 100;

//   if (num !== 0) {
//     if (tens === 1 && hundreds !== 11) {
//       result += 'st';
//     } else if (tens === 2 && hundreds !== 12) {
//       result += 'nd';
//     } else if (tens === 3 && hundreds !== 13) {
//       result += 'rd';
//     } else {
//       result += 'th';
//     }
//   }

//   return result;
// }



console.log(numberToOrdinal(0));