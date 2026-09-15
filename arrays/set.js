let array =[1,2,3,1,2,3]

console.time()
let uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray)
console.timeEnd()


console.time()
let uniqueArray1 = [...new Set(array)];
console.log(uniqueArray1);
console.timeEnd()

console.time()
let uniqueArray2 = Array.from(new Set(array));
console.log(uniqueArray2);
console.timeEnd()




