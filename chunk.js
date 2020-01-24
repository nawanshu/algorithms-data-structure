function chunk(array, size){
    //Solution 1
    // const chunked = [];
    // for(let element of array) {
    //     const last = chunked[chunked.length - 1];
    //     if(!last || last.length === size) {
    //         chunked.push([element]);
    //     } else{
    //         last.push(element);
    //     }
    // }
    // return chunked;

    //Solution 2
    const chunked = [];
    let index = 0;
    while(index < array.length) {
        chunked.push(array.slice(index, index+size));
        index += size;
    }
    return chunked;
}

console.log(chunk([1,2,3], 2));