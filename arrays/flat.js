let array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]

console.log(array.flat(2))
console.log(array.flat(Infinity))


function flattenDeep(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenDeep(item)); // Recursive call
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flattenDeep(array));
